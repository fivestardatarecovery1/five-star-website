#!/bin/bash
# Five Star — fast deploy script
# Builds locally on your Mac (warm cache, ~30s) then uploads prebuilt
# output directly to Vercel — skipping their build queue entirely.
# Total time: ~45s vs 2-3 min via git push.
#
# One-time setup — add to ~/.zshrc:
#   export FS_VERCEL_TOKEN="your_five_star_vercel_token"

set -e

TOKEN="${FS_VERCEL_TOKEN}"

if [ -z "$TOKEN" ]; then
  echo "❌ FS_VERCEL_TOKEN not set."
  echo "   Add to ~/.zshrc: export FS_VERCEL_TOKEN=your_token"
  exit 1
fi

echo "🔨 Building locally..."
npm run build

echo "🚀 Uploading prebuilt output to Vercel..."
npx vercel deploy --prebuilt --prod --token "$TOKEN"

echo "✅ Done!"
