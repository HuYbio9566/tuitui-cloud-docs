#!/bin/zsh
set -e

项目目录="$(cd "$(dirname "$0")/当前工作稿" && pwd)"
地址="http://127.0.0.1:8765/当前首页原型.html"

cd "$项目目录"
if lsof -tiTCP:8765 -sTCP:LISTEN >/dev/null 2>&1; then
  open "$地址"
  exit 0
fi

python3 -m http.server 8765 --bind 127.0.0.1 >/tmp/推推云文档本地预览.log 2>&1 &
服务进程="$!"
trap 'kill "$服务进程" 2>/dev/null || true' EXIT
sleep 1
open "$地址"
wait "$服务进程"
