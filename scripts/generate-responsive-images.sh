#!/usr/bin/env bash

set -euo pipefail

if ! command -v magick >/dev/null 2>&1; then
  echo "ImageMagick is required to generate responsive image assets." >&2
  exit 1
fi

find public/images -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0 |
  while IFS= read -r -d '' source; do
    stem="${source%.*}"

    for width in 480 768 1200; do
      magick "$source" -resize "${width}x>" -strip -quality 82 "${stem}-${width}.webp"
    done
  done

echo "Generated responsive WebP variants in public/images."
