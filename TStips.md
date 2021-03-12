# Starting a TS project

## TSC/initial dependencies

1. Run `npm init -y`
2. Run `npm i typescript`
3. Add `"dev":"tsc"` to the `scripts` section of `package.json`
   - this is so when you launch proj with `npm run dev`, it will compile your `.ts` into `.js`
4. Remove `"main": "index.js"` from `package.json` as well
4. Run `tsc --init` to create `tsconfig.json`
   - _Must have Typescript installed globally to do this; otherwise you will need
     to create a `tsconfig.json` yourself (not fun)_ 
     - If you're not sure if TS is installed globally; run `npm i typescript -g`
5. Test `npm run dev` in the terminal 
6. If a `.js` version of your `.ts` file is made, and no errors other than TypeErrors appear; change `dev` to `"dev":"webpack -w"` in the `package.json`
 
## Webpack

6. Make a file called `webpack.config.js` in root project folder
   - Paste in the following:
   ```javascript
   const path = require('path');
   module.exports = {
       mode: 'development',
       // if your file is named something else, change app.ts
       entry: './app.ts', 
       output: {
           path: path.resolve(__dirname, 'dist'),
           filename: 'app.js'   //here too
       },
       module: {
           rules: [{
               test: /\.tsx?$/,
               use: 'ts-loader',
               exclude: /node_modules/
           }]
       },
       resolve: {
           extensions: ['.ts', '.tsx', '.js']
       }
   }
   ```
7. Run `npm i webpack webpack-cli ts-loader`
8. Test if working by running `npm run dev`
