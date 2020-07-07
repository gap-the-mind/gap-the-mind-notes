import gql from "graphql-tag"

export const getNoteQuery = gql`
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
export const addNoteMutation = gql`
  mutation {
    createNote(title: "Test de création") {
      id
      title
      text
    }
  }
`
export const deleteNoteMutation = gql`
  mutation($id: ID!) {
    deleteNode(id: $id) {
      title
      text
    }
  }
`

export const editNoteMutation = gql`
  mutation($id: ID!, $edition: EditNoteInput!) {
    editNote(id: $id, edition: $edition) {
      id
      text
      title
      tags {
        id
      }
    }
  }
`
