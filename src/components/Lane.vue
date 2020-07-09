<template>
  <div id="tag">
    <input v-model="expression" placeholder="filter" />
    {{expression}}
    <div v-for="note in visibleNotes" :key="note.id">
      <Note v-bind:note="note" />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, ref, reactive, computed, watchEffect } from "vue"
import { TagModel, NoteModel } from "../state/notes/model"
import { useNotes } from "../state/notes"

import lep from "logical-expression-parser"

import Note from "./Note.vue"

export default {
  props: {
    notes: {
      type: Array as PropType<NoteModel[]>,
    },
  },
  components: {
    Note,
  },
  setup(props, { emit }) {
    const expression = ref("")

    const visibleNotes = computed(() =>
      props.notes.filter((n) => {
        const exp = expression.value.trim()

        if (exp === "") {
          return false
        }

        const tags = n.tags.map((t) => t.id)

        return lep.parse(exp, (t) => tags.indexOf(t.trim()) > -1)
      })
    )

    return {
      expression,
      visibleNotes,
    }
  },
}
</script>

<style scoped></style>
