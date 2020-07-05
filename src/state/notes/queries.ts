import gql from "graphql-tag"

const noteFragment = gql`
  fragment noteFields on Note {
    id
    title
    text
    tags {
      id
    }
  }
`

export const getNoteQuery = gql`
  query {
    currentUser {
      email
      notesConnection {
        edges {
          node {
            ...noteFields
          }
        }
      }
    }
  }
  ${noteFragment}
`
export const addNoteMutation = gql`
  mutation {
    createNote(title: "Test de création") {
      ...noteFields
    }
  }
  ${noteFragment}
`
export const deleteNoteMutation = gql`
  mutation($id: ID!) {
    deleteNode(id: $id) {
      ...noteFields
    }
  }
  ${noteFragment}
`

export const editNoteMutation = gql`
  mutation($id: ID!, $edition: EditNoteInput!) {
    editNote(id: $id, edition: $edition) {
      ...noteFields
    }
  }
  ${noteFragment}
`
