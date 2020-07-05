<template>
  <div id="tag">{{ tag.id }}</div>
</template>

<script lang="ts">
export default {
  props: {
    tag: {},
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