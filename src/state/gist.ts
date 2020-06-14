import { reactive, computed } from "vue"
import token from "./token"

export interface GistModel {
  title: string
}

interface GistState {
  gists: GistModel[]
}

const state = reactive<GistState>({
  gists: [{ title: "title 1" }, { title: "title 2" }],
  result: {},
})

async function fetchNotes() {}

export function useGist() {
  return {
    gists: computed(() => state.gists),
    result: computed(() => state.result),
    addGist: () => state.gists.push({ title: "Narf" }),
    fetchNotes,
  }
}
