<template>
  <h1>Dashboard</h1>

  <button @click="addNote()">Add</button>

  <div id="scroll-area">
    <div id="notes-area">
      <div v-for="note in notes" :key="note.id">
        <Note v-bind:note="note" />

        <button @click="deleteNote(note.id)">X</button>
      </div>
    </div>
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
    const un = useNotes()
    un.getNotes()

    return {
      ...un,
    }
  },
}
</script>

<style scoped>
#notes-area {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 350px;
}
</style>