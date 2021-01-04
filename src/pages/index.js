import * as React from "react"
import { StaticQuery, graphql } from 'gatsby';
import axios from 'axios'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// test query by Graphql
const query = graphql`
  query {
    allStrapiUser {
      edges {
        node {
          id
          username
        }
      }
    }
  }
`;

// markup
const IndexPage = () => {

  // test queryy by axios
  React.useEffect( () => {
    let SERVER_URL = "https://oii-demobackend.tk";

    async function fetchData() {
      // You can await here
      await axios
        .get(SERVER_URL + "/site-setting")
        .then(response => {
          console.log("get site-setting response", response.data);
        })
        .catch(error => console.log("Error when connect to API 3", error));
    }

    fetchData()
    
  }, [])

  

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>Test Query</h1>

      <StaticQuery
        query={query}
        render={data => (
          <ul>
            {data.allStrapiUser.edges.map(user => (
              <li key={user.node.id}>{user.node.username}</li>
            ))}
          </ul>
        )}
      />
    </main>
  )
}

export default IndexPage
