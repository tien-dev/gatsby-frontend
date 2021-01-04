module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-strapi",
      // options: {
      //   apiURL: "http://localhost:1337",
      //   contentTypes: [
      //     "category",
      //   ],
      //   queryLimit: 1000,
      // },

      options: {
        apiURL: "https://178.128.239.190",
        contentTypes: ["user"],
        singleTypes: ["homepage", "navigation", "site-setting"],
        queryLimit: 1000,
      },
    },
  ],  
};
