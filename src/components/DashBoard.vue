<template>
  <h1>Dashboard</h1>

  <button @click="addNewNote()">Add</button>
  <button @click="getNotes()">Get</button>

  <div id="notes-zone">
    <Note v-bind:note="note" v-for="note in notes" :key="note" />
  </div>
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

<style scoped>
#notes-zone {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 350px;
}
</style>