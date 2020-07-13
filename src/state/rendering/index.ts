import { reactive } from "vue"
import { RenderingModel, RenderingState } from "./model"
import { graphqlClient } from "../graphql"

const state = reactive<RenderingState>({
  rendering: [],
})

async function getRendering() {
  const result = await graphqlClient.query({ query: getNoteQuery })
  state.notes = result.data.currentUser.notesConnection.edges.map(
    (n: any) => n.node
  )
}
