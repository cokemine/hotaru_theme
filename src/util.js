export default {
    getStatus() {
        return (this.server.online4 || this.server.online6);
    },
    getCpuStatus() {
        return this.server.cpu === undefined ? 100 : this.server.cpu;
    },
    getRAMStatus() {
        return this.server.memory_used === undefined ? 100 : Math.round((this.server.memory_used / this.server.memory_total * 100));
    },
    getHDDStatus() {
        return this.server.hdd_used === undefined ? 100 : Math.round((this.server.hdd_used / this.server.hdd_total * 100));
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