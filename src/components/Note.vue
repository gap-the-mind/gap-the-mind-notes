<template>
  <article id="outer">
    <input class="title note-item" v-model="note.title" />
    <textarea id="text-zone" class="note-item" v-model="note.text" />
    <TagList
      id="tags"
      class="note-item"
      :tags="note.tags"
      @update-tags="updateTags(note.id, $event)"
    />
  </article>
</template>

<script lang="ts">
import { PropType } from "vue"
import TagList from "./TagList.vue"
import { NoteModel } from "../state/notes/model"
import { useNotes } from "../state/notes"

export default {
  props: {
    note: {
      type: Object as PropType<NoteModel>,
      required: true,
    },
  },
  components: {
    TagList,
  },
  setup(props) {
    const { updateTags } = useNotes()

    return {
      updateTags,
    }
  },
}
</script>

<style scoped>
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
}
</style>