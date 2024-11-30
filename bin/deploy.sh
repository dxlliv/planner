#!/bin/sh

git clone git@github.com:dxlliv/planner-ui.git ui

npm install

# build planner
npm run generate

# delete symbolic link
rm dist

# move real dist folder to /dist
mv .output/public/ dist

# build documentation
npm run docs:build

# move docs dist folder to dist/docs
mv docs/.vitepress/dist/ dist/docs

# disable jekyll to avoid any _problems
touch dist/.nojekyll

# create .gitignore
echo -e ".nuxt\.output\node_modules" >> dist/.gitignore

# place dist files manually in gh-pages
# since git subtree seems unusable now
rm -rf ../dist
mv dist ../dist

rm -rf ./ui

git checkout gh-pages
rm -r *
mv ../dist/* .

# commit to gh-pages
git add .
git commit -m "Update gh-pages"