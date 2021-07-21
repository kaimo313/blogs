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
# git push -f https://gitee.com/kaimo313/blogs.git master

git config user.name kaimo
git config user.email 2116437116@qq.com

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:kaimo313/blog.git master:gh-pages
git push -f https://github.com/kaimo313/blog.git main:gh-pages

cd -