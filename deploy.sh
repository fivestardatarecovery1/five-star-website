#!/bin/bash
# Five Star — fast deploy script
# Builds locally (warm cache, ~30s) then uploads prebuilt output to Vercel.
# Much faster than git push → Vercel build queue (~2-3 min).
#
# Setup (one time): add to ~/.zshrc or ~/.bash_profile:
#   export VERCEL_TOKEN="your_token_here"

set -e

if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ VERCEL_TOKEN not set. Add to ~/.zshrc: export VERCEL_TOKEN=your_token"
  exit 1
fi

echo "🔨 Building locally..."
npm run build

echo "🚀 Deploying prebuilt output to Vercel..."
npx vercel deploy --prebuilt --prod --token "$VERCEL_TOKEN"

echo "✅ Done!"
