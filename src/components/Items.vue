<template>
  <tr class="tableRow" @click="collapsed = !collapsed">
    <td>
      <div class="ui progress" :class="{'success': getStatus, 'error': !getStatus}">
        <div class="bar" style="width: 100%" v-if="getStatus"><span> 运行中 </span>
        </div>
        <div class="bar" style="width: 100%" v-if="!getStatus"><span> 维护中 </span>
        </div>
      </div>
    </td>
    <td>{{ server.name }}</td>
    <td>{{ server.type }}</td>
    <td>{{ server.location }}</td>
    <td>{{ server.uptime || '–' }}</td>
    <td>{{ server.load === undefined ? '–' : server.load }}</td>
    <td>{{
        getStatus ? (tableRowByteConvert(server.network_rx) + ' | ' + tableRowByteConvert(server.network_tx)) : '–'
      }}
    </td>
    <td>{{
        getStatus ? (tableRowByteConvert(server.network_in) + ' | ' + tableRowByteConvert(server.network_out)) : '–'
      }}
    </td>
    <td>
      <div class="ui progress" :class="getProcessBarStatus(getCpuStatus)">
        <div class="bar" :style="{'width': getCpuStatus.toString() + '%'}">
          {{ getStatus ? getCpuStatus.toString() + '%' : '维护中' }}
        </div>
      </div>
    </td>
    <td>
      <div class="ui progress" :class="getProcessBarStatus(getRAMStatus)">
        <div class="bar" :style="{'width': getRAMStatus.toString() + '%'}">
          {{ getStatus ? getRAMStatus.toString() + '%' : '维护中' }}
        </div>
      </div>
    </td>
    <td>
      <div class="ui progress" :class="getProcessBarStatus(getHDDStatus)">
        <div class="bar" :style="{'width': getHDDStatus.toString() + '%'}">
          {{ getStatus ? getHDDStatus.toString() + '%' : '维护中' }}
        </div>
      </div>
    </td>
  </tr>
  <tr class="expandRow">
    <td colspan="12">
      <div :class="{collapsed}" :style="{height: !getStatus && '0'}">
        <div id="expand_mem">内存信息: {{
            getStatus ? (expandRowByteConvert(server.memory_used * 1024) + ' / ' +
                expandRowByteConvert(server.memory_total * 1024)) : '–'
          }}
        </div>
        <div id="expand_swap">交换分区: {{
            getStatus ? (expandRowByteConvert(server.swap_used * 1024) + ' / ' + expandRowByteConvert(server.swap_total *
                1024)) : '–'
          }}
        </div>
        <div id="expand_hdd">硬盘信息: {{
            getStatus ? (expandRowByteConvert(server.hdd_used * 1024 * 1024) + ' / ' +
                expandRowByteConvert(server.hdd_total * 1024 * 1024)) : '–'
          }}
        </div>
        <!--        <div id="expand_custom">{{server.custom}}</div>-->
      </div>
    </td>
  </tr>
</template>

<script>
import util from '@/util'

export default {
  name: "Items",
  props: ["server"],
  data() {
    return {
      collapsed: true
    }
  },
  computed: util
}
</script>

<style scoped>

tr.tableRow {
  background-color: rgba(249, 249, 249, .5);
  vertical-align: middle;
}

tr.expandRow td > div {
  overflow: hidden;
  transition: height 0.5s;
  height: 54px;
}

tr.expandRow td > div.collapsed {
  height: 0;
}

div.progress {
  display: inline-block;
  overflow: hidden;
  height: 25px;
  width: 50px;
  border-radius: 6px;
  margin-bottom: 0 !important;
}

div.progress div.bar {
  height: 25px;
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 25px;
  color: white;
}

tr td {
  color: #616366;
  font-weight: bold;
  border: none !important;
}
</style>