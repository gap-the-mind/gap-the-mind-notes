<template>
  <h2>{{ gist }}</h2>
</template>

<script lang="ts">
import { ref, reactive, computed, watchEffect, onMounted } from "vue"
import { GistModel } from "../state/gist"

interface Props {}

export default {
  props: {
    gist: {},
  },
  setup() {},
}
</script>