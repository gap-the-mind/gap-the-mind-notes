<template>
  <div>
    <h1>Dashboard</h1>

    <button @click="addNote()">Add</button>

    <div id="scroll-area">
      <div id="notes-area">
        <div id="lanes">
          <Lane :notes="notes" />
        </div>
        <div id="all-notes">
          <div v-for="note in notes" :key="note.id">
            <Note v-bind:note="note" />

            <button @click="deleteNote(note.id)">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useNotes } from "../state/notes"

import Note from "./Note.vue"
import Lane from "./Lane.vue"

export default {
  components: {
    Note,
    Lane,
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