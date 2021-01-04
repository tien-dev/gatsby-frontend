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
        apiURL: "https://oii-demobackend.tk",
        contentTypes: ["users"],
        singleTypes: ["homepage", "navigation", "site-setting"],
        queryLimit: 1000,
      },
    },
  ],  
};
