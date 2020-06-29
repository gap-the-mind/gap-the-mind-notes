import { reactive, computed } from "vue"
import { graphqlClient } from "./graphql"
import gql from "graphql-tag"

export interface NoteModel {
  title: string
}

interface NotesState {
  notes: NoteModel[]
  result: any
}

const state = reactive<NotesState>({
  notes: [],
  result: {},
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
  state.result = result
}

export function useNotes() {
  return {
    notes: computed(() => state.notes),
    result: computed(() => state.result),
    addNewNote: () => state.notes.push({ title: "Narf" }),
    getNotes,
  }
}
