import { ComputerType } from "@models/controllers/dropdown/types/computertype.model"
import { MonitorType } from "@models/controllers/dropdown/types/monitortype.model"
import { NetworkEquipmentType } from "@models/controllers/dropdown/types/networkequipmenttype.model"
import { PeripheralType } from "@models/controllers/dropdown/types/peripheraltype.model"
import { PhoneType } from "@models/controllers/dropdown/types/phonetype.model"
import { PrinterType } from "@models/controllers/dropdown/types/printertype.model"

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