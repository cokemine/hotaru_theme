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
    <td>{{ server.load == undefined ? '–' : server.load }}</td>
    <td>{{
        getStatus ? (tableRowByteConvert(server.network_rx) + ' | ' + tableRowByteConvert(server.network_tx)) : '–'
      }}
    </td>
    <td>{{
        getStatus ? (tableRowByteConvert(server.network_in) + ' | ' + tableRowByteConvert(server.network_out)) : '–'
      }}
    </td>
    <td>
      <div class="ui progress" :class="processBarStatus(getCpuStatus)">
        <div class="bar" :style="{'width': getCpuStatus.toString() + '%'}">
          {{ server.cpu === undefined ? '维护中' : getCpuStatus.toString() + '%' }}
        </div>
      </div>
    </td>
    <td>
      <div class="ui progress" :class="processBarStatus(getRAMStatus)">
        <div class="bar" :style="{'width': getRAMStatus.toString() + '%'}">
          {{ server.memory_total === undefined ? '维护中' : getRAMStatus.toString() + '%' }}
        </div>
      </div>
    </td>
    <td>
      <div class="ui progress" :class="processBarStatus(getHDDStatus)">
        <div class="bar" :style="{'width': getHDDStatus.toString() + '%'}">
          {{ server.hdd_total === undefined ? '维护中' : getHDDStatus.toString() + '%' }}
        </div>
      </div>
    </td>
  </tr>
  <tr class="expandRow">
    <td colspan="12">
      <div :class="{collapsed}">
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
        <div id="expand_custom"></div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Items",
  props: ["server"],
  data() {
    return {
      collapsed: true
    }
  },
  computed: {
    getStatus() {
      if (this.server.online4 || this.server.online6) return true;
      else return false;
    },
    getCpuStatus() {
      return this.server.cpu == undefined ? 100 : this.server.cpu;
    },
    getRAMStatus() {
      return this.server.memory_used == undefined ? 100 : Math.round((this.server.memory_used / this.server.memory_total * 100));
    },
    getHDDStatus() {
      return this.server.hdd_used == undefined ? 100 : Math.round((this.server.hdd_used / this.server.hdd_total * 100));
    },
    tableRowByteConvert() {
      return (data) => {
        if (data < 1024) return data.toFixed(0) + "B";
        else if (data < 1024 * 1024) return (data / 1024).toFixed(0) + "K";
        else if (data < 1024 * 1024 * 1024) return (data / 1024 / 1024).toFixed(1) + "M";
        else if (data < 1024 * 1024 * 1024 * 1024) return (data / 1024 / 1024 / 1024).toFixed(2) + "G";
        else return (data / 1024 / 1024 / 1024 / 1024).toFixed(2) + "T";
      }
    },
    expandRowByteConvert() {
      return (data) => {
        if (data < 1024) return data.toFixed(0) + " B";
        else if (data < 1024 * 1024) return (data / 1024).toFixed(2) + " KiB";
        else if (data < 1024 * 1024 * 1024) return (data / 1024 / 1024).toFixed(2) + " MiB";
        else if (data < 1024 * 1024 * 1024 * 1024) return (data / 1024 / 1024 / 1024).toFixed(2) + " GiB";
        else return (data / 1024 / 1024 / 1024 / 1024).toFixed(2) + " TiB";
      }
    },
    processBarStatus() {
      return (data) => {
        if (data > 90) return "error";
        else if (data > 70) return "warning";
        else return "success";
      }
    }
  }
}
</script>

<style scoped>

#servers tr.tableRow {
  background-color: rgba(249, 249, 249, .6);
  vertical-align: middle;
}

#servers tr.expandRow td > div {
  overflow: hidden;
  transition: height 0.5s;
  height: 58px;
}

#servers tr.expandRow td > div.collapsed {
  height: 0;
}

#servers .progress {
  display: inline-block;
  overflow: hidden;
  height: 25px;
  width: 50px;
  border-radius: 6px;
  margin-bottom: 0;
}

#servers .bar {
  height: 25px;
  border-radius: 6px;
}

#servers tr td {
  color: #616366;
  font-weight: bold;
  border: none !important;
}

#servers tr td:not(:first-child) div.progress.success div.bar {
  text-align: center;
  min-width: 0;
}

#servers .bar {
  font-size: 0.95rem;
  line-height: 25px;
  color: white;
}
</style>