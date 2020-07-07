<template>
  <div class="tag-list">
    <Tag
      class="tag"
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag"
      @delete-tag="deleteTag(tag.id)"
    />
    <input class="tag-input" v-model="tagsInput" v-on:keyup.enter="onEnter()" />
  </div>
</template>

<script lang="ts">
import { ref, PropType } from "vue"
import Tag from "./Tag.vue"
import { TagModel } from "../state/notes/model"
import { useNotes } from "../state/notes"

interface Props {
  tags: TagModel[]
}

export default {
  props: {
    tags: {
      type: Array as PropType<TagModel[]>,
      required: true,
    },
  },
  components: {
    Tag,
  },
  setup(props, { emit }) {
    const tagsInput = ref("")

    const onEnter = () => {
      const allTags = props.tags
        .map((t) => t.id)
        .concat(tagsInput.value.split("#"))
        .map((t) => t.trim())
        .filter((t) => t !== "")

      const uniqueTags = new Set(allTags)

      emit(
        "update-tags",
        Array.from(uniqueTags).map((t) => ({ id: t }))
      )

      tagsInput.value = ""
    }

    const deleteTag = (id: string) =>
      emit(
        "update-tags",
        props.tags.filter((t) => t.id !== id).map((t) => ({ id: t.id }))
      )

    return {
      onEnter,
      deleteTag,
      tagsInput,
    }
  },
}
</script>

<style scoped>
.tag-list {
  display: flex;
  flex-flow: row wrap;
}

.tag {
  margin: 2px;
  flex: initial;
}

.tag-input {
  flex: auto;
  border-radius: 5px;
  /* border: none; */
}
</style>