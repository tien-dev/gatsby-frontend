const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("F:\\projects\\gatsby-frontend\\.cache\\dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("F:\\projects\\gatsby-frontend\\src\\pages\\index.js")))
}

