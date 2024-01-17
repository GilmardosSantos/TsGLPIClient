import { Cable } from '@models/controllers/actives/cable.model'
import { CartridgeItem } from '@models/controllers/actives/cartridgeitem.model'
import { Computer } from '@models/controllers/actives/computer.model'
import { ConsumableItem } from '@models/controllers/actives/consumableitem.model'
import { Enclosure } from '@models/controllers/actives/enclosure.model'
import { Item_Device } from '@models/controllers/actives/item_device.model'
import { Monitor } from '@models/controllers/actives/monitor.model'
import { NetworkEquipament } from '@models/controllers/actives/networkequipament.model'
import { PassivedCEquipament } from '@models/controllers/actives/passivedcequipment.model'
import { PDU } from '@models/controllers/actives/pdu.model'
import { Peripheral } from '@models/controllers/actives/peripheral.model'
import { Phone } from '@models/controllers/actives/phone.model'
import { Printer } from '@models/controllers/actives/printer.model'
import { Rack } from '@models/controllers/actives/rack.model'
import { Software } from '@models/controllers/actives/software.model'
import { Unmanaged } from '@models/controllers/actives/unmanaged.model'

export {
    Cable,
    CartridgeItem,
    Computer,
    ConsumableItem,
    Enclosure,
    Item_Device,
    Monitor,
    NetworkEquipament,
    PDU,
    PassivedCEquipament,
    Peripheral,
    Phone,
    Printer,
    Rack,
    Software,
    Unmanaged
}

export type ActiveRequestMap = {
    "Cable": Cable;
    "CartridgeItem": CartridgeItem;
    "Computer": Computer 
    "ConsumableItem": ConsumableItem
    "Enclosure": Enclosure 
    "Item_DeviceSIMCARD": Item_Device
    "Monitor": Monitor
    "PassivedCEquipament": PassivedCEquipament 
    "Peripheral":  Peripheral
    "Pdu": PDU
    "Phone": Phone
    "Printer": Printer
    "Rack": Rack
    "Software": Software
    "Unmanaged": Unmanaged
}













