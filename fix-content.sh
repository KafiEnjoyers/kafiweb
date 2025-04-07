#!/bin/bash

# 提交更改
git add .
git commit -m "修复网站内容：添加样式和修复路径问题"

# 推送到GitHub
git push origin main

echo "内容修复完成！请稍后查看部署结果。"
