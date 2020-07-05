<template>
  <div id="tag-list">
    <Tag v-for="tag in tags" :key="tag.id" :tag="tag" />
  </div>
</template>

<script lang="ts">
import Tag from "./Tag.vue"

export default {
  props: {
    tags: [],
  },
  components: {
    Tag,
  },
  setup() {},
}
</script>

<style>
#tag {
  font-size: smaller;
  border-radius: 5px;
  border: 1px solid #ccc;

  padding: 3px;
}
</style>