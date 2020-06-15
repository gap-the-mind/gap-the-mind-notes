import Axios from "axios"
import token from "./token"

const url = "/graphql"

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
}

export default function graphQL(query: string) {
  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  })
}
