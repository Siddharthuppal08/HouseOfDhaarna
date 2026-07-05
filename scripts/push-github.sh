#!/bin/bash
set -e

echo "→ Pushing to GitHub (Siddharthuppal08/HouseOfDhaarna)..."
git push -u origin main

echo ""
echo "✓ Code pushed. GitHub Actions will build and deploy automatically."
echo ""
echo "Next steps (one-time):"
echo "  1. Open: https://github.com/Siddharthuppal08/HouseOfDhaarna/settings/pages"
echo "  2. Source: GitHub Actions"
echo "  3. Custom domain: houseofdhaarna.com"
echo "  4. Update DNS at your registrar (see DEPLOY.md)"
echo ""
echo "Watch deploy: https://github.com/Siddharthuppal08/HouseOfDhaarna/actions"
