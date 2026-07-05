# Product Images

Drop your product photos here as `.jpg`, `.jpeg`, `.png`, or `.webp` files.

## Naming

Use simple, lowercase filenames with hyphens, for example:

- `chocolate-brown-vase.jpg`
- `ranunculus-bouquet-combo.jpg`
- `green-croton-plant.jpg`

## How to use in the product catalog

In `data/import/products.xlsx` (or `products.csv`), set the **image** column to match the filename:

```
chocolate-brown-vase.jpg
```

The site loads images from `/products/images/` — so the full path becomes:

```
/products/images/chocolate-brown-vase.jpg
```

## Tips

- Use square images (at least 800×800 px) for best results on product cards
- Keep file sizes under 500 KB when possible
- One main image per product is enough to start
