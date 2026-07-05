import { parse } from 'csv-parse/sync'
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const CSV_PATH = join(root, 'catalog/products.csv')
const CATALOG_IMAGES = join(root, 'catalog/images')
const PUBLIC_IMAGES = join(root, 'public/products/images')
const OUTPUT_JSON = join(root, 'src/data/catalog.json')
const MANIFEST_JSON = join(root, 'catalog/manifest.json')

const GITHUB_REPO = process.env.GITHUB_REPO || 'Siddharthuppal08/HouseOfDhaarna'
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main'

mkdirSync(CATALOG_IMAGES, { recursive: true })
mkdirSync(PUBLIC_IMAGES, { recursive: true })
mkdirSync(dirname(OUTPUT_JSON), { recursive: true })

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function inferCategory(row) {
  const code = String(row['Product Code'] || '').toLowerCase()
  const name = String(row.Name || '').toLowerCase()
  const type = String(row['attr_Product Type'] || row['attr_ Type'] || '').toLowerCase()

  if (name.includes('combo') || code.includes('combo')) return 'Combos'
  if (code.startsWith('vase') || type.includes('vase')) return 'Vases'
  if (code.includes('plant') || type.includes('plant')) return 'Plants'
  if (code.includes('flower') || type.includes('flower')) return 'Flowers'
  return 'Home Decor'
}

function calcDiscount(price, mrp) {
  const selling = Number(price)
  const original = Number(mrp)
  if (!original || original <= selling) return 0
  return Math.round(((original - selling) / original) * 100)
}

function imageFilename(sku, imageUrl, index = 1) {
  const ext = extname(new URL(imageUrl).pathname) || '.jpg'
  const base = slugify(sku)
  return index === 1 ? `${base}${ext}` : `${base}-${index}${ext}`
}

function buildGithubImageUrl(file) {
  return `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/public/products/images/${file}`
}

async function downloadImage(url, destination) {
  if (existsSync(destination)) return true

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const buffer = Buffer.from(await response.arrayBuffer())
    writeFileSync(destination, buffer)
    return true
  } catch (error) {
    console.warn(`  ✗ Failed: ${url} (${error.message})`)
    return false
  }
}

async function run() {
  console.log('Reading catalog CSV...')
  const csv = readFileSync(CSV_PATH, 'utf8')
  const rows = parse(csv, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
  })

  const visibleRows = rows.filter((row) => {
    const visibility = String(row.Visibility || '').toLowerCase()
    return visibility === 'true' || visibility === '1'
  })

  console.log(`Found ${visibleRows.length} visible products (${rows.length} total rows)`)

  const products = []
  let downloaded = 0
  let failed = 0

  for (const [index, row] of visibleRows.entries()) {
    const sku = row['Sku Id'] || row['Product Code'] || `product-${index + 1}`
    const price = Number(row['Selling Price']) || 0
    const originalPrice = Number(row.MRP) || price
    const discount = calcDiscount(price, originalPrice)

    const sourceImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .map((n) => row[`Image ${n}`]?.trim())
      .filter((url) => url && url.startsWith('http'))

    const gallery = []

    process.stdout.write(`[${index + 1}/${visibleRows.length}] ${sku}`)

    for (const [imageIndex, imageUrl] of sourceImages.entries()) {
      const fileIndex = imageIndex + 1
      const imageFile = imageFilename(sku, imageUrl, fileIndex)
      const catalogPath = join(CATALOG_IMAGES, imageFile)
      const publicPath = join(PUBLIC_IMAGES, imageFile)

      const ok = await downloadImage(imageUrl, catalogPath)
      if (ok) {
        copyFileSync(catalogPath, publicPath)
        downloaded += 1
        gallery.push({
          file: imageFile,
          url: buildGithubImageUrl(imageFile),
        })
        process.stdout.write(fileIndex === 1 ? ' ✓' : `+${fileIndex}`)
      } else {
        failed += 1
      }
    }

    process.stdout.write('\n')

    const primary = gallery[0] || null

    products.push({
      id: sku,
      sku,
      productCode: row['Product Code'] || '',
      name: row.Name?.trim() || 'Untitled Product',
      subtitle: [row.Colour, row.Size, row['attr_Material']]
        .filter(Boolean)
        .slice(0, 2)
        .join(' · '),
      category: inferCategory(row),
      price,
      originalPrice,
      discount,
      colour: row.Colour || '',
      size: row.Size || '',
      material: row['attr_Material'] || '',
      description: row.Description?.replace(/\s+/g, ' ').trim() || '',
      idealFor: row['attr_Ideal For']?.replace(/\s+/g, ' ').trim() || '',
      feature: row['attr_Feature']?.replace(/\s+/g, ' ').trim() || '',
      quantity: Number(row.Quantity) || 0,
      image: primary?.url || '',
      imageFile: primary?.file || '',
      gallery,
    })
  }

  const catalog = {
    generatedAt: new Date().toISOString(),
    sourceFile: 'catalog/products.csv',
    githubRepo: GITHUB_REPO,
    githubBranch: GITHUB_BRANCH,
    imageBasePath: '/products/images/',
    githubImageBaseUrl: `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/public/products/images/`,
    totalProducts: products.length,
    products,
    categories: [...new Set(products.map((p) => p.category))].sort(),
    collections: {
      newArrivals: products.slice(0, 8).map((p) => p.id),
      bestSellers: products
        .filter((p) => p.discount >= 50)
        .slice(0, 8)
        .map((p) => p.id),
      all: products.map((p) => p.id),
    },
  }

  writeFileSync(OUTPUT_JSON, `${JSON.stringify(catalog, null, 2)}\n`)
  writeFileSync(
    MANIFEST_JSON,
    `${JSON.stringify(
      {
        generatedAt: catalog.generatedAt,
        totalProducts: catalog.totalProducts,
        imagesDownloaded: downloaded,
        imagesFailed: failed,
        categories: catalog.categories,
        githubRepo: GITHUB_REPO,
      },
      null,
      2,
    )}\n`,
  )

  console.log('\nDone!')
  console.log(`  Products: ${products.length}`)
  console.log(`  Images downloaded: ${downloaded}`)
  console.log(`  Images failed: ${failed}`)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
