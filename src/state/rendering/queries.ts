import gql from "graphql-tag"

export const getRenderingQuery = gql`
  query {
    currentUser {
      email
      notesConnection {
        edges {
          node {
            id
            title
            text
            tags {
              id
            }
          }
        }
      }
    }
  }
`
