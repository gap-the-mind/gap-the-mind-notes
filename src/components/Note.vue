<template>
  <article id="outer">
    <input class="title" v-model="note.title" />
    <textarea id="text-zone">{{ note.text }}</textarea>
  </article>
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

<style>
#outer {
  box-shadow: 2px 2px 10px -5px rgba(50, 50, 50, 0.75);
  width: 300px;
  height: 300px;
  margin: 15px;
  border-radius: 20px;
  display: flex;
  flex-flow: column;
}

.title {
  flex: none;
  margin: 10px;
  font-weight: bold;
}

#text-zone {
  flex: auto;
  margin: 10px;
  margin-top: 0px;

  padding: 10px;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;

  resize: none;
}
</style>