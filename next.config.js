// next.config.js
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
module.exports = withSass(withCss({
  /* config options here */
  // cssModules: true,
  // sassLoaderOptions: {
  //   includePaths: ["absolute/path/a", "absolute/path/b"]
  // }
}))
