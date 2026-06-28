#!/usr/bin/env bash
# Сжимает hero-видео для десктопа и мобильной версии.
# Требуется ffmpeg в PATH.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
INPUT="$ROOT/public/assets/video-opera.mp4"
DESKTOP="$ROOT/public/assets/video-opera-desktop.mp4"
MOBILE="$ROOT/public/assets/video-opera-mobile.mp4"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg не найден. Установите: brew install ffmpeg" >&2
  exit 1
fi

ffmpeg -y -i "$INPUT" \
  -an \
  -vf "scale='min(1920,iw)':-2,fps=30" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 23 -preset slow \
  -movflags +faststart \
  "$DESKTOP"

ffmpeg -y -i "$INPUT" \
  -an \
  -vf "scale='min(1280,iw)':-2,fps=30" \
  -c:v libx264 -profile:v main -pix_fmt yuv420p \
  -crf 28 -preset slow \
  -movflags +faststart \
  "$MOBILE"

ls -lh "$INPUT" "$DESKTOP" "$MOBILE"
