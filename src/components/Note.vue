<template>
  <h2>{{ note.title }}</h2>
  <div>{{ note.text }}</div>
</template>

<script lang="ts">
import { ref, reactive, computed, watchEffect, onMounted } from "vue"
import { NoteModel } from "../state/note"

interface Props {}

export default {
  props: {
    note: {},
  },
  setup() {},
}
</script>