<template>
  <div id="tag">
    <span>{{ tag.id }}</span>
    <span class="mdi mdi-close"></span>
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
  setup() {},
}
</script>

<style scoped>
#tag {
  font-size: smaller;
  border-radius: 5px;
  border: 1px solid #ccc;

  padding: 3px;
}
</style>