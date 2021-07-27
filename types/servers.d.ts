/* eslint-disable */
declare global {
  interface BoxItem {
    'name': string;
    'host': string;
    'type': string;
    'online4': boolean;
    'online6': boolean;
    'location': string;
    'region': string;
  }

  interface StatusItem extends BoxItem {
    'uptime': string;
    'load': number;
    'cpu': number;
    'network_rx': number;
    'network_tx': number;
    'network_in': number;
    'network_out': number;
    'memory_total': number;
    'memory_used': number;
    'swap_total': number;
    'swap_used': number;
    'hdd_total': number;
    'hdd_used': number;
    'custom': string;
  }

  interface Window {
    __PRE_CONFIG__: {
      header: string;
      subHeader: string;
      interval: number;
      footer: string;
    }
  }
}
export {};
