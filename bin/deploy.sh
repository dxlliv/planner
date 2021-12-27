#!/bin/sh

vite build
yarn docs:build

# move docs dist folder to dist/docs
mv docs/.vitepress/dist/ dist/docs

# commit, then deploy on GitHub Pages
git add .
git commit -m "Update dist folder"
git subtree push --prefix dist origin gh-pages