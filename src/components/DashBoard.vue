<template>
  <h1>Dashboard</h1>

  <button @click="addGist()">Add</button>
  <button @click="fetchGist()">Fetch</button>

  {{ result }}

  <Gist v-bind:gist="gist" v-for="gist in gists" :key="gist" />
</template>

<script lang="ts">
import { ref, reactive, computed } from "vue"
import { useGist } from "../state/gist"

import Gist from "./Gist.vue"

export default {
  components: {
    Gist,
  },
  setup() {
    return {
      ...useGist(),
    }
  },
}
</script>
