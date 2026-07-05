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

## Deploy to houseofdhaarna.com (GitHub Pages)

Everything is configured for **GitHub Pages only** — no Vercel needed.

**Repo:** [Siddharthuppal08/HouseOfDhaarna](https://github.com/Siddharthuppal08/HouseOfDhaarna)

### 1. Push code (run in Terminal)

```bash
cd ~/Projects/house-of-dhaarna
git push -u origin main
```

Or: `bash scripts/push-github.sh`

### 2. Enable GitHub Pages (one-time)

Open [Pages settings](https://github.com/Siddharthuppal08/HouseOfDhaarna/settings/pages):

- **Source:** GitHub Actions
- **Custom domain:** `houseofdhaarna.com`
- **Enforce HTTPS:** on (after DNS verifies)

### 3. Update DNS (one-time)

Point `houseofdhaarna.com` to GitHub Pages — see `DEPLOY.md` for A records.

After DNS propagates, the site goes live at **https://houseofdhaarna.com**

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
