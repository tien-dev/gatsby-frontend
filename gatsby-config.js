
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-strapi",
      // options: {
      //   apiURL: "http://localhost:1337",
      //   contentTypes: ["category", "user"],
      //   singleTypes: ["test-type"],
      //   queryLimit: 1000,
      // },

      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["user"],
        singleTypes: isProd ? ["homepage", "navigation", "site-setting"] : ["test-type"],
        queryLimit: 1000,
      },

    },
  ],  
};
