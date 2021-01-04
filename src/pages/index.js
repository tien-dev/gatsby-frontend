import * as React from "react"
// import { StaticQuery, graphql } from 'gatsby';

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// const query = graphql`
//   query {
//     allStrapiCategory {
//       edges {
//         node {
//           Name
//           Description
//           strapiId
//         }
//       }
//     }
//   }
// `;

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>Test Query</h1>

      {/* <StaticQuery
        query={query}
        render={data => (
          <ul>
            {data.allStrapiCategory.edges.map(category => (
              <li key={category.node.strapiId}>{category.node.Name} : {category.node.Description}</li>
            ))}
          </ul>
        )}
      /> */}
    </main>
  )
}

export default IndexPage
