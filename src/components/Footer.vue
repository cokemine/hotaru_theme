<template>
  <footer>
    <p>Powered by <a
        href="https://github.com/CokeMine/ServerStatus-Hotaru">ServerStatus-Hotaru</a></p>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Footer"
})
</script>

<style scoped>
footer p {
  text-align: center;
  padding-bottom: 15px;
}
</style>
