# Product Catalog (Excel / CSV)

Place your product spreadsheet here:

```
data/import/products.xlsx
```

You can also use CSV — save or export as `products.csv` in this same folder.

## Required columns

| Column | Description | Example |
|--------|-------------|---------|
| `id` | Unique number for each product | `1` |
| `name` | Product title | `Chocolate Brown Flower Vase` |
| `subtitle` | Short detail line | `Wooden material · without flowers` |
| `category` | Category name | `Vases`, `Plants`, `Combos`, `Flowers` |
| `price` | Sale price in ₹ (numbers only) | `599` |
| `originalPrice` | MRP before discount | `1198` |
| `discount` | Discount percentage | `50` |
| `badge` | Optional label on card | `New`, `Bestseller`, `Popular` (leave blank if none) |
| `image` | Image filename only | `chocolate-brown-vase.jpg` |
| `description` | Full product description | Long text for detail pages |
| `featured` | Show on homepage | `yes` or `no` |
| `newArrival` | Show in New Arrivals | `yes` or `no` |
| `bestSeller` | Show in Best Sellers | `yes` or `no` |

## Image files

Put matching photos in:

```
public/products/images/
```

The `image` column should be just the filename, e.g. `chocolate-brown-vase.jpg`.

## Template

See `products-template.csv` in this folder for a ready-to-fill example. Open it in Excel, fill in your products, and save as `products.xlsx`.

## After you add your files

Tell us when your images and spreadsheet are ready — we can wire the site to load products automatically from your Excel file.
