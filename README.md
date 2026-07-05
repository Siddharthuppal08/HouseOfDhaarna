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

1. Repo is configured: [Siddharthuppal08/HouseOfDhaarna](https://github.com/Siddharthuppal08/HouseOfDhaarna)
2. Push from your machine (already committed locally):

```bash
cd ~/Projects/house-of-dhaarna
git push -u origin main
```

3. Enable **GitHub Pages**: repo Settings → Pages → Build and deployment → Source: **GitHub Actions**
4. After deploy, your site will be live at:
   **https://siddharthuppal08.github.io/HouseOfDhaarna/**

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
