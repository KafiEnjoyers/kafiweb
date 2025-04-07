#!/bin/bash

# 提交更改
git add .
git commit -m "修复配置: 从svelte.config.js中移除trailingSlash配置，保留在+layout.js中"

# 推送到GitHub
git push origin main

echo "修复完成！"
