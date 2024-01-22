import type { ComputerType } from "./computertype.model";
import type { MonitorType } from "./monitortype.model";
import type { NetworkEquipmentType } from "./networkequipmenttype.model";
import type { PeripheralType } from "./peripheraltype.model";
import type { PhoneType } from "./phonetype.model";
import type { PrinterType } from "./printertype.model";
import type { SoftwareLicenseType } from "./softwarelicensetype.model";
import type { CartridgeItemType } from "./cartridgeitemtype.model";
import type { ConsumableItemType } from "./consumableitemtype.model";
import type { ContactType } from "./contacttype.model";
import type { ContractType } from "./contracttype.model";
import type { DeviceGenericType } from "./devicegenerictype.model";
import type { DeviceSensorType } from "./devicesensortype.model";
import type { DeviceMemoryType } from "./devicememorytype.model";
import type { SupplierType } from "./suppliertype.model";
import type { InterfaceType } from "./interfacetype.model";
import type { DeviceCaseType } from "./devicecasetype.model";
import type { PhonePowerSupplyType } from "./phonepowersupplytype.model";
import type { FileSystemType } from "./filesystemtype.model";
import type { CertificateType } from "./certificatetype.model";
import type { BudgetType } from "./budgettype.model";
import type { DeviceSimcardType } from "./devicesimcardtype.model";
import type { LineType } from "./linetype.model";
import type { RackType } from './racktype.model';
import { PduType } from "./pdutype.model";

export type DropdownTypesMap = {
    BudgetType: BudgetType,
    CartridgeItemType: CartridgeItemType,
    CertificateType: CertificateType,
    ComputerType: ComputerType,
    ConsumableItemType: ConsumableItemType,
    ContactType: ContactType,
    ContractType: ContractType,
    DeviceSimcardType: DeviceSimcardType,
    DeviceCaseType: DeviceCaseType,
    DeviceGenericType: DeviceGenericType,
    DeviceSensorType: DeviceSensorType,
    DeviceMemoryType: DeviceMemoryType,
    InterfaceType: InterfaceType,
    LineType: LineType,
    MonitorType: MonitorType,
    NetworkEquipmentType: NetworkEquipmentType,
    PeripheralType: PeripheralType,
    PhoneType: PhoneType,
    PhonePowerSupply: PhonePowerSupplyType,
    PrinterType: PrinterType,
    SoftwareLicenseType: SoftwareLicenseType,
    SupplierType: SupplierType,
    FileSystem: FileSystemType,
    RackType: RackType,
}