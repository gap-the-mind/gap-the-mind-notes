import { reactive, computed } from "vue"
import graphQL from "./graphql"

export interface GistModel {
  title: string
}

interface GistState {
  gists: GistModel[]
  result: any
}

const state = reactive<GistState>({
  gists: [{ title: "title 1" }, { title: "title 2" }],
  result: {},
})

async function fetchNotes() {
  try {
    const res = await graphQL(`query {
      currentUser {
        name
      }
  }
  
  `)
    state.result = await res.json()
  } catch (e) {
    state.result = e
  }
}

export function useGist() {
  return {
    gists: computed(() => state.gists),
    result: computed(() => state.result),
    addGist: () => state.gists.push({ title: "Narf" }),
    fetchNotes,
  }
}
