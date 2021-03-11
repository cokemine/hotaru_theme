<template>
  <div class="column">
    <div class="ui fluid card">
      <div class="card-header">
        <img :src="`img/clients/${server.region}.png`" :alt="`${server.region}`"><span> {{ server.name }} </span>
        <p>{{ server.type }}</p>
      </div>
      <div class="ui tiny progress success">
        <div class="bar" :style="{width: getStatus ? `${getRAMStatus.toString()}%` : '0%'}">
        </div>
      </div>
      <div class="card-content">
        <p>Network: {{ `${tableRowByteConvert(server.network_rx)} | ${tableRowByteConvert(server.network_tx)}` }}</p>
        <p>负载状态: {{ `${server.load}%` }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import useStatus from './useStatus';

export default defineComponent({
  name: "CardItem",
  props: {
    server: {
      type: Object as PropType<StatusItem | BoxItem>,
      default: {}
    }
  },
  setup(props) {
    const {getStatus, getRAMStatus, tableRowByteConvert} = useStatus(props);
    return {
      getStatus,
      getRAMStatus,
      tableRowByteConvert
    }
  }
})
</script>

<style scoped>
div.card {
  padding: 24px;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2);
  border-radius: .5rem;
  background-color: rgba(255, 255, 255, .8);
}

div.card div.card-header img {
  vertical-align: middle;
  border-radius: 5px;
  margin-right: 7px;
}

div.card div.card-header span {
  font-size: 1.25rem;
  font-weight: normal;
  vertical-align: middle;
}

div.card div.card-header p {
  padding-top: 5px;
  color: #919699;
}

div.card div.card-content p {
  margin-bottom: 0;
}

div.card div.progress {
  margin: 1.2em 0;
}
</style>
