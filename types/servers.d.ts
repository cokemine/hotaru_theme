declare global {
    interface BoxItem {
        "name": string;
        "host":string;
        "type": string;
        "location": string;
        "region": string;
    }

    interface StatusItem extends BoxItem {
        "online4": boolean;
        "online6": boolean;
        "uptime": string;
        "load": number;
        "cpu": number;
        "network_rx": number;
        "network_tx": number;
        "network_in": number;
        "network_out": number;
        "memory_total": number;
        "memory_used": number;
        "swap_total": number;
        "swap_used": number;
        "hdd_total": number;
        "hdd_used": number;
        "custom"?: any;
    }
}
export {}