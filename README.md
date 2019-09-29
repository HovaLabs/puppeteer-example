# Puppeteer-Example
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Tests all files that end with `.test.js`.<br>
To launch the browser when running puppeteer tests, run `HEADLESS=false yarn test`

### `yarn test-prod`

Tests all files that end with `.test.js`. This tests against the github pages website<br>
To launch the browser when running puppeteer tests, run `HEADLESS=false yarn test`

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn deploy`

Builds the app and then pushes the build result to the gh-pages branch. This page can be visited at https://hovalabs.github.io/puppeteer-example/  
