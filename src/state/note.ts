import { reactive, toRefs } from "vue"
import { graphqlClient } from "./graphql"
import gql from "graphql-tag"

export interface TagModel {
  id: string
}
export interface NoteModel {
  id: string
  title: string
  text: string
  tags: string[]
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
              tags {
                id
              }
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
        title
        text
      }
    }
  `

  const result = await graphqlClient.mutate({ mutation })

  const note = result.data.createNote

  state.notes.push(note)
}

async function deleteNote(id: string) {
  const mutation = gql`
    mutation($id: ID!) {
      deleteNode(id: $id) {
        title
        text
      }
    }
  `

  const result = await graphqlClient.mutate({ mutation, variables: { id } })

  state.notes = state.notes.filter((n) => n.id != id)
}

export function useNotes() {
  return {
    notes: toRefs(state).notes,
    addNote,
    getNotes,
    deleteNote,
  }
}
