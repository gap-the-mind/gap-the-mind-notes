<template>
  <div class="lane-container">
    <div class="lane">
      <input v-model="expression" placeholder="filter" />
      {{ test }}

      <Note v-for="note in visibleNotes" :key="note.id" v-bind:note="note" />
    </div>
    <div class="scroll-bar"></div>
  </div>
</template>

<script lang="ts">
import { PropType, ref, reactive, computed, watchEffect } from "vue"
import { TagModel, NoteModel } from "../state/notes/model"
import { useNotes } from "../state/notes"

import {
  ast,
  LiteralEvaluator,
  EvalReducer,
  ToStringReducer,
} from "@gap-the-mind/logical-expression-parser"

import Note from "./Note.vue"

interface Props {
  notes: NoteModel[]
}

export default {
  props: {
    notes: {
      type: Array as PropType<NoteModel[]>,
    },
  },
  components: {
    Note,
  },
  setup(props: Props, { emit }) {
    const expression = ref("")
    const filter = computed(() => ast(expression.value))
    const test = computed(() => filter.value.reduce(new ToStringReducer()))

    const visibleNotes = computed(() =>
      props.notes.filter((n) => {
        const exp = expression.value.trim()

        if (exp === "") {
          return false
        }

        const tags = n.tags.map((t) => t.id)
        const reducer = new EvalReducer(
          (t: string) => tags.indexOf(t.trim()) > -1
        )

        return filter.value.reduce(reducer)
      })
    )

    return {
      expression,
      visibleNotes,
      test,
    }
  },
}
</script>

<style scoped>
.lane {
  overflow-y: hidden;
  flex: 1;
  /* width: calc(300px + 2 * 10px); */
}

.lane:hover {
  overflow-y: scroll;
}

.lane:hover + .scroll-bar {
  display: none;
}

.lane-container {
  display: flex;
}

.scroll-bar {
  overflow-x: hidden;
  overflow-y: scroll;
  visibility: hidden;
  float: left;
}

.lane > .note {
  margin-bottom: 40px;
}
</style>
