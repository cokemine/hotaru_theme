import { computed } from 'vue';
export default (props) => {
    const getStatus = computed(() => {
        return props.server.online4 || props.server.online6;
    });
    const getCpuStatus = computed(() => {
        return props.server.cpu === undefined ? 100 : props.server.cpu;
    });
    const getRAMStatus = computed(() => {
        return props.server.memory_total === undefined ? 100 : Math.round((props.server.memory_used / props.server.memory_total * 100));
    });
    const getHDDStatus = computed(() => {
        return props.server.hdd_total === undefined ? 100 : Math.round((props.server.hdd_used / props.server.hdd_total * 100));
    });
    const getProcessBarStatus = computed(() => {
        return (data) => {
            if (data > 90)
                return "error";
            else if (data > 70)
                return "warning";
            else
                return "success";
        };
    });
    const tableRowByteConvert = computed(() => {
        return (data) => {
            if (data < 1024)
                return data.toFixed(0) + "B";
            else if (data < 1024 * 1024)
                return (data / 1024).toFixed(0) + "K";
            else if (data < 1024 * 1024 * 1024)
                return (data / 1024 / 1024).toFixed(1) + "M";
            else if (data < 1024 * 1024 * 1024 * 1024)
                return (data / 1024 / 1024 / 1024).toFixed(2) + "G";
            else
                return (data / 1024 / 1024 / 1024 / 1024).toFixed(2) + "T";
        };
    });
    const expandRowByteConvert = computed(() => {
        return (data) => {
            if (data < 1024)
                return data.toFixed(0) + " B";
            else if (data < 1024 * 1024)
                return (data / 1024).toFixed(2) + " KiB";
            else if (data < 1024 * 1024 * 1024)
                return (data / 1024 / 1024).toFixed(2) + " MiB";
            else if (data < 1024 * 1024 * 1024 * 1024)
                return (data / 1024 / 1024 / 1024).toFixed(2) + " GiB";
            else
                return (data / 1024 / 1024 / 1024 / 1024).toFixed(2) + " TiB";
        };
    });
    return {
        getStatus,
        getCpuStatus,
        getRAMStatus,
        getHDDStatus,
        getProcessBarStatus,
        tableRowByteConvert,
        expandRowByteConvert
    };
};
//# sourceMappingURL=useStatus.js.map