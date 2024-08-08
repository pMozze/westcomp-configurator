interface IRangeSlider {
  min: number;
  max: number;
  step: number;
}

export interface ICPUConfiguratorFilters {
  cores: number[];
  frequency: IRangeSlider;
  tdp: IRangeSlider;
}

export interface IRAMConfiguratorFilters {
  memoryCapacity: IRangeSlider;
  ddrVersion: number[];
  clockFrequency: IRangeSlider;
  bandwidth: IRangeSlider;
}

export interface IStorageDeviceConfiguratorFilters {
  type: string[];
  formFactor: string[];
  interface: string[];
  dataTransferRate: IRangeSlider;
}

interface IConfiguratorItem {
  name: string;
  tooltip?: string;
  price: number;
  maxAmount: number;
}

interface ICPUConfiguratorItem extends IConfiguratorItem {
  cores: number;
  frequency: number;
  tdp: number;
}

interface IRAMConfiguratorItem extends IConfiguratorItem {
  memoryCapacity: number;
  ddrVersion: number;
  clockFrequency: number;
  bandwidth: number;
}

interface IStorageDeviceConfiguratorItem extends IConfiguratorItem {
  type: string;
  formFactor: string;
  interface: string;
  dataTransferRate: number;
}

export interface IConfigurator {
  name: 'processor' | 'ram' | 'storage-device';
  tooltip: string | null;
  filters: ICPUConfiguratorFilters | IRAMConfiguratorFilters | IStorageDeviceConfiguratorFilters;
  items: ICPUConfiguratorItem[] | IRAMConfiguratorItem[] | IStorageDeviceConfiguratorItem[];
  maxSelected: number;
}
