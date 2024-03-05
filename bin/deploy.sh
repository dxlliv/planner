#!/bin/sh

# build planner
yarn generate

# delete symbolic link
rm -rf dist

# move real dist folder to /dist
mv .output/public/ dist

# build documentation
yarn docs:build

# move docs dist folder to dist/docs
mv docs/.vitepress/dist/ dist/docs

# disable jekyll to avoid any _problems
touch dist/.nojekyll

# place dist files manually in gh-pages
# since git subtree seems unusable now
mv dist ../dist
git checkout gh-pages
git rm -r .
mv ../dist/* .

# commit to gh-pages
git add .
git commit -m "Update gh-pages"

# switch back to main branch
git checkout main