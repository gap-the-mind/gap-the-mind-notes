import { reactive, toRefs } from "vue"
import { graphqlClient } from "../graphql"

import { NotesState, TagModel } from "./model"
import {
  getNoteQuery,
  addNoteMutation,
  deleteNoteMutation,
  editNoteMutation,
} from "./queries"

const state = reactive<NotesState>({
  notes: [],
})

async function getNotes() {
  const result = await graphqlClient.query({ query: getNoteQuery })
  state.notes = result.data.currentUser.notesConnection.edges.map(
    (n: any) => n.node
  )
}

async function addNote() {
  const result = await graphqlClient.mutate({ mutation: addNoteMutation })

  const note = result.data.createNote

  state.notes.push(note)
}

async function deleteNote(id: string) {
  const result = await graphqlClient.mutate({
    mutation: deleteNoteMutation,
    variables: { id },
  })

  state.notes = state.notes.filter((n) => n.id != id)
}

async function updateTags(id: string, tags: TagModel[]) {
  console.log(tags)

  const result = await graphqlClient.mutate({
    mutation: editNoteMutation,
    variables: { id, edition: { tags } },
  })

  state.notes = state.notes.map((n) => (n.id === id ? { ...n, tags } : n))
}

export function useNotes() {
  return {
    notes: toRefs(state).notes,
    addNote,
    getNotes,
    deleteNote,
    updateTags,
  }
}
