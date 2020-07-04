import { reactive, computed } from "vue"
import { graphqlClient } from "./graphql"
import gql from "graphql-tag"

export interface NoteModel {
  id: string
  title: string
  text: string
}

interface NotesState {
  notes: NoteModel[]
}

const state = reactive<NotesState>({
  notes: [],
})

async function getNotes() {
  const query = gql`
    query {
      currentUser {
        email
        notesConnection {
          edges {
            node {
              id
              title
              text
            }
          }
        }
      }
    }
  `

  const result = await graphqlClient.query({ query })
  state.notes = result.data.currentUser.notesConnection.edges.map(
    (n: any) => n.node
  )
}

async function addNote() {
  const mutation = gql`
    mutation {
      createNote(title: "Test de création") {
        id
      }
    }
  `

  const result = await graphqlClient.mutate({ mutation })

  const id = result.data.createNote.id

  return getNotes()
}

async function deleteNote(id: string) {
  const mutation = gql(
    `
    mutation {
      deleteNode(id: $id) {
        title
        text
      }
    }`,
    ["id"]
  )

  const result = await graphqlClient.mutate({ mutation })

  return getNotes()
}

export function useNotes() {
  return {
    notes: computed(() => state.notes),
    addNote,
    getNotes,
    deleteNote,
  }
}
