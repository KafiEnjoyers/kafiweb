#!/bin/bash

# 删除package-lock.json和node_modules
rm -rf package-lock.json node_modules

# 重新安装依赖
npm install --legacy-peer-deps

# 提交更改
git add .
git commit -m "更新依赖版本，修复GitHub Pages部署配置"

# 推送到GitHub
git push origin main

echo "更新完成！"
