<template>
  <div id="outer">
    <h2>{{ note.title }}</h2>
    <div>{{ note.text }}</div>
  </div>
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

<style lang="stylus" scoped>
#outer {
  box-shadow: 15px 15px 20px 9px rgba(50, 50, 50, 0.75);
}
</style>