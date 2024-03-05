#!/bin/sh

yarn generate
yarn docs:build

# move docs dist folder to dist/docs
mv docs/.vitepress/dist/ dist/docs

# disable jekyll to avoid any _problems
touch dist/.nojekyll

# commit, then deploy on GitHub Pages
git add .
git commit -m "Update dist folder"
git subtree push --prefix dist origin gh-pages