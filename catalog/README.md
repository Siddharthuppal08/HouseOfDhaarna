# House of Dhaarna — Product Catalog

This folder is your **local master copy** of all product data and images.

## Contents

| Path | Purpose |
|------|---------|
| `products.csv` | Full product catalog (exported from your store) |
| `images/` | Downloaded product photos (one per SKU) |
| `manifest.json` | Generated summary after import (auto-created) |

## Update catalog

When you get a new export from your store:

1. Replace `products.csv` with the new file
2. Run:

```bash
npm run import-catalog
```

This downloads images and refreshes the website product data.

## GitHub

Images are also copied to `public/products/images/` for the website.
Commit and push the repo so images stay live on GitHub and your deployed site.
