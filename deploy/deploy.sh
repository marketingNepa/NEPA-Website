#!/usr/bin/env bash
# =============================================================
#  NEPA Engineering — one-command build + deploy to cPanel
# =============================================================
#  Builds the Astro site to ./dist and mirrors it to your
#  cPanel account over FTPS using lftp.
#
#  USAGE
#    1. Copy deploy.env.example -> deploy.env and fill in your
#       cPanel FTP details (never commit deploy.env).
#    2. Run:   ./deploy/deploy.sh
#
#  REQUIREMENTS: node + npm, and lftp
#                (sudo apt install lftp  /  brew install lftp)
# =============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"
ENV_FILE="$SCRIPT_DIR/deploy.env"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "✗ Missing $ENV_FILE"
  echo "  Copy deploy/deploy.env.example to deploy/deploy.env and fill it in."
  exit 1
fi

# shellcheck disable=SC1090
source "$ENV_FILE"

: "${FTP_HOST:?Set FTP_HOST in deploy.env}"
: "${FTP_USER:?Set FTP_USER in deploy.env}"
: "${FTP_PASS:?Set FTP_PASS in deploy.env}"
REMOTE_DIR="${REMOTE_DIR:-/public_html}"
FTP_PORT="${FTP_PORT:-21}"

command -v lftp >/dev/null 2>&1 || { echo "✗ lftp is not installed. Install it and retry."; exit 1; }
command -v npm  >/dev/null 2>&1 || { echo "✗ npm is not installed. Install Node.js and retry."; exit 1; }

echo "➜ Building NEPA Engineering (Astro)"
( cd "$ROOT_DIR" && npm ci && npm run build )

if [[ ! -d "$DIST_DIR" ]]; then
  echo "✗ Build did not produce a dist/ folder. Aborting."
  exit 1
fi

echo ""
echo "➜ Deploying NEPA Engineering"
echo "  Local : $DIST_DIR"
echo "  Remote: $FTP_USER@$FTP_HOST:$FTP_PORT $REMOTE_DIR"
echo ""

# Mirror the built static site (dist/) to the server. The .htaccess in
# public/ is emitted into dist/ by Astro, so server config ships too.
lftp -u "$FTP_USER","$FTP_PASS" -p "$FTP_PORT" "ftp://$FTP_HOST" <<EOF
set ftp:ssl-allow true
set ftp:ssl-force true
set ftp:ssl-protect-data true
set ssl:verify-certificate no
set net:timeout 15
set net:max-retries 2
mirror --reverse --delete --verbose \
  --exclude-glob .DS_Store \
  "$DIST_DIR" "$REMOTE_DIR"
bye
EOF

echo ""
echo "✓ Deploy complete — visit https://www.nepaeng.com/"
