import { reactive, computed } from "vue"
import { Octokit } from "https://cdn.pika.dev/@octokit/core"
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

const octokit = new Octokit(token)

async function fetchGist() {
  const response = await octokit.graphql(`query { 
    viewer { 
      login
    }
  }`)

  state.result = response
}

export function useGist() {
  return {
    gists: computed(() => state.gists),
    result: computed(() => state.result),
    addGist: () => state.gists.push({ title: "Narf" }),
    fetchGist,
  }
}
