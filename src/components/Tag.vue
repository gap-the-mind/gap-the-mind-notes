<template>
  <div id="tag">
    <span>{{ tag.id }}</span>
    <span class="mdi mdi-close" @click="deleteTag"></span>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue"
import { TagModel } from "../state/notes/model"

export default {
  props: {
    tag: {
      type: Object as PropType<TagModel>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const deleteTag = () => {
      emit("delete-tag")
    }

    return {
      deleteTag,
    }
  },
}
</script> 

<style scoped>
#tag {
  font-size: smaller;
  border-radius: 5px;
  border: 1px solid #ccc;

  padding: 3px;
}

.mdi {
  justify-content: baseline;
  cursor: pointer;
}
</style>