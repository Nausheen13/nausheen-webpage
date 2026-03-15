To deploy the website to GitHub Pages:
```bash
npm run build
cd dist
git add .
git commit -m "Deploy"
git push --force https://github.com/Nausheen13/nausheen-webpage.git HEAD:gh-pages
cd ..
```

The site will be live at: https://nausheen13.github.io/nausheen-webpage/
