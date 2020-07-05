<template>
  <article id="outer">
    <input class="title note-item" v-model="note.title" />
    <textarea id="text-zone" class="note-item">{{ note.text }}</textarea>
    <div id="tags" class="note-item"></div>
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

.note-item {
  margin-left: 10px;
  margin-right: 10px;

  margin-top: 5px;
  margin-bottom: 5px;
}

.note-item:first-child {
  margin-top: 10px;
}

.note-item:last-child {
  margin-bottom: 10px;
}

.title {
  flex: none;

  font-weight: bold;

  border-radius: 5px;
  border: 1px solid #ccc;
}

#text-zone {
  flex: auto;

  padding: 10px;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;

  resize: none;
}

#tags {
  flex: initial;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>