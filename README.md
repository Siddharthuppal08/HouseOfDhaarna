# House of Dhaarna

Professional website for [House of Dhaarna](https://houseofdhaarna.com) — premium artificial plants, flowers & home decor.

Orders are placed via **WhatsApp** (+91 9999789965).

## Catalog & images (local folders)

| Folder | What's stored |
|--------|----------------|
| `catalog/products.csv` | Master product spreadsheet (from your store export) |
| `catalog/images/` | Local backup of all product photos |
| `public/products/images/` | Images served by the website |
| `src/data/catalog.json` | Generated product data for the site |

After updating `catalog/products.csv`, refresh everything:

```bash
npm run import-catalog
```

## GitHub setup (images always live)

1. Create a repo on GitHub (e.g. `house-of-dhaarna`)
2. Set your repo in `.env`:

```bash
cp .env.example .env
# Edit VITE_GITHUB_REPO=your-username/your-repo-name
```

3. Push the project (includes all 75+ product images):

```bash
git init
git add .
git commit -m "Add House of Dhaarna website with full product catalog"
git branch -M main
git remote add origin https://github.com/Siddharthuppal08/HouseOfDhaarna.git
git push -u origin main
```

4. Deploy (pick one):
   - **Vercel / Netlify** — connect the GitHub repo; images load from `/products/images/`
   - **GitHub Pages** — enable in repo Settings → Pages
   - **CDN fallback** — set `VITE_USE_GITHUB_CDN=true` in `.env` to load images directly from:
     `https://raw.githubusercontent.com/YOUR_USERNAME/house-of-dhaarna/main/public/products/images/`

## Run locally

```bash
npm install
npm run import-catalog   # only needed after CSV changes
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Current catalog

- **75 products** imported from your NuShop export
- Images downloaded from S3 and saved locally + in `public/products/images/`
- Categories: Plants, Flowers, Vases, Combos, Home Decor
