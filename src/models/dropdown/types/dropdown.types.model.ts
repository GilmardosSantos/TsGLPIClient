import { ComputerType } from "./computertype.model"
import { MonitorType } from "./monitortype.model"
import { NetworkEquipmentType } from "./networkequipmenttype.model"
import { PeripheralType } from "./peripheraltype.model"
import { PhoneType } from "./phonetype.model"
import { PrinterType } from "./printertype.model"

export {
    ComputerType,
    MonitorType,
    NetworkEquipmentType,
    PeripheralType,
    PhoneType,
    PrinterType,
}

export type DropdownTypesMap = {
    ComputerType: ComputerType,
    MonitorType: MonitorType,
    NetworkEquipmentType: NetworkEquipmentType,
    PeripheralType: PeripheralType,
    PhoneType: PhoneType,
    PrinterType: PrinterType,
}