#!/bin/sh
git clone --depth=1 https://github.com/jcalcaben/devdocs.git -b gh-pages --single-branch _gh-pages

rm -fr _gh-pages/pwa-devdocs

mv _site _gh-pages/pwa-devdocs

cd _gh-pages

git add .

DATE=`date %Y%m%d.%H%M`

git commit -m 'Build $DATE'

# Rebase just in case something changed while cloning
git fetch origin

git rebase origin/gh-pages