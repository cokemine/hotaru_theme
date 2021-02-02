<template>
  <p>
    若長時間出現此消息，請確保您已啟用Javascript！<br>否則雲監控主服務（服務端）未啟動或已關閉。
  </p>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Error'
})
</script>
<style scoped>
p {
  text-align: center;
  color: #616366;
  margin-bottom: 0;
}
</style>