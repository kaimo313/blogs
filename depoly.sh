#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build:docs

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'depoly脚本更新'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://gitee.com/kaimo313/blogs.git master

cd -