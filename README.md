Deployment steps for the website:
npm run build
cd dist
git add .
git commit -m "Deploy"
git push --force https://github.com/Nausheen13/nausheen-webpage.git HEAD:gh-pages
cd ..
