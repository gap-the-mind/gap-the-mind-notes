<template>
  <!--<button @click="addNote()">Add</button>-->
  <div id="dashboard">
    <div id="lanes">
      <Lane :notes="notes" />
    </div>

    <div id="all">
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
#dashboard {
  width: 100%;
  height: 100%;

  display: flex;
}

#lanes {
  display: flex;
}

#all {
  flex-grow: 1;
  overflow: auto;

  display: inline-flex;
  flex-flow: column wrap;
}
</style>