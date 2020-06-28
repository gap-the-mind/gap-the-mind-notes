<template>
  <h2>{{ note }}</h2>
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