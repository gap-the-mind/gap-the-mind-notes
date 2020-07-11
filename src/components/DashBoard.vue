<template>
  <!--<button @click="addNote()">Add</button>-->

  <div id="notes-area">
    <div id="lanes">
      <Lane :notes="notes" />
    </div>
    <div id="all-notes">
      <Note v-for="note in notes" :key="note.id" v-bind:note="note" />

      <!--<button @click="deleteNote(note.id)">X</button>-->
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
  display: flex;
  flex-direction: row;
  height: 100%;
  widows: 100%;
}

#all-notes {
  display: flex;
  flex: auto;
  flex-flow: column wrap;
  height: 100%;
  flex-basis: 20px;
}
</style>