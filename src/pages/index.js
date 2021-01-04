import * as React from "react"
// import { StaticQuery, graphql } from 'gatsby';
import axios from 'axios'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// state = {
//   siteSetting: null
// }

// async componentDidMount(){
//   await axios
//     .get(SERVER_URL + "/site-setting")
//     .then(response => {
//       console.log("get site-setting response", response.data);
//       this.setState({ siteSetting: response.data });
//     })
//     .catch(error => console.log("Error when connect to API 3", error));
// }

// const query = graphql`
//   query {
//     allStrapiUser {
//       edges {
//         node {
//           strapiId
//         }
//       }
//     }
//   }
// `;

// markup
const IndexPage = () => {

  // console.log('>>>>> test query: ', query)
  let SERVER_URL = "https://oii-demobackend.tk";

  await axios
    .get(SERVER_URL + "/site-setting")
    .then(response => {
      console.log("get site-setting response", response.data);
    })
    .catch(error => console.log("Error when connect to API 3", error));

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
