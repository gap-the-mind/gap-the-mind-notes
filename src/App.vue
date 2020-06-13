<template>
  <DashBoard />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import DashBoard from "./components/DashBoard.vue"

export default defineComponent({
  name: "App",
  components: {
    DashBoard,
  },
})
</script>