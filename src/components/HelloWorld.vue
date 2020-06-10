<template>
  <h1>{{ msg }}</h1>
  <button @click="increment()">count is: {{ state.count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, reactive, computed } from "vue"

export default {
  props: { msg: String },
  setup(props) {
    const state: any = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>