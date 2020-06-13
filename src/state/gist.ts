import { reactive, computed } from "vue"

export interface GistModel {
  title: string
}

interface GistState {
  gists: GistModel[]
}

const state = reactive<GistState>({
  gists: [{ title: "title 1" }, { title: "title 2" }],
})

export function useGist() {
  return {
    gists: computed(() => state.gists),
  }
}
