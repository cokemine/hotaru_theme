<template>
  <div class="ui container">
    <table class="ui basic unstackable table" id="table">
      <thead>
      <tr>
        <th id="status4">运行状态</th>
        <th id="name">节点名</th>
        <th id="type">类型</th>
        <th id="location">服务器位置</th>
        <th id="uptime">在线时间</th>
        <th id="load">负载</th>
        <th id="network">网络(B/s) ↓|↑</th>
        <th id="traffic">流量(B) ↓|↑</th>
        <th id="cpu">CPU</th>
        <th id="ram">RAM</th>
        <th id="hdd">ROM</th>
      </tr>
      </thead>
      <tbody id="servers">
      <!-- Servers here \o/ -->
      <Items v-for="(server,index) of servers" :key="index" :server="server"></Items>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Items from '@/components/Items.vue';

export default defineComponent({
  name: "Body",
  props: {
    servers: {
      type: Array as PropType<Array<StatusItem>>,
      default: {}
    }
  },
  components: {
    Items
  }
})
</script>
<style scoped>
#table {
  font-size: 1rem;
  border: none;
  text-align: center;
  vertical-align: middle;
}

#table thead tr th {
  color: #9da2a6;
}
</style>