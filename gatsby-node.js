// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;
//     const result = await graphql(
//       `
//         {
//           categories: allStrapiCategory {
//             edges {
//               node {
//                 name
//               }
//             }
//           }
//         }
//       `
//     );
  
//     if (result.errors) {
//       throw result.errors;
//     }
  
//     // Create blog articles pages.
//     const categories = result.data.categories.edges;
  
//     const CategoryTemplate = require.resolve('./src/templates/category.js');
  
//     categories.forEach((category, index) => {
//       createPage({
//         path: `/category/${category.node.Name}`,
//         component: CategoryTemplate,
//         context: {
//           name: category.node.Name,
//         },
//       });
//     });
// };