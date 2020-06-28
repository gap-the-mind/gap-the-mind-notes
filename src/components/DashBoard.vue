<template>
  <h1>Dashboard</h1>

  <button @click="addNewNote()">Add</button>

  <Note v-bind:note="note" v-for="note in notes" :key="note" />
</template>

<script lang="ts">
import { ref, reactive, computed } from "vue"
import { useNotes } from "../state/note"

import Note from "./Note.vue"

export default {
  components: {
    Note,
  },
  setup() {
    return {
      ...useNotes(),
    }
  },
}
</script>
