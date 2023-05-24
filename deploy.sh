echo "Switching branch"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* sergio@192.155.82.210:/var/www/linkdigest.net/

echo "Done!"