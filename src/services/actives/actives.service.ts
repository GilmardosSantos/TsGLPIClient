import { GLPIRequestHandler } from "../../handlers/glpi-request-handler";
import { InterfacesMap } from "../../interfaces/interfaces.module";
import { GLPIAuthenticationResponse } from "../../interfaces/services/authentication.model";

class ActivesService {
    constructor(private request: GLPIAuthenticationResponse){
        this.request = { ...request };
    }

    get cable(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["cable"], "getAnItem">(this.request, "cable")
    }

    get cartridgeItem(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["cartridgeitem"], "getAnItem">(this.request, "cartridgeitem")
    }

    get computer(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["computer"], "ComputerParams">(this.request, "computer")
    }

    get consumableItem(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["ConsumableItem"], "getAnItem">(this.request, "ConsumableItem")
    }

    get enclosure(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["enclosure"], "getAnItem">(this.request, "enclosure")
    }

    get itemDevice(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["Item_DeviceSimcard"], "getAnItem">(this.request, "Item_DeviceSimcard")
    }

    get monitor(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["monitor"], "getAnItem">(this.request, "monitor")
    }

    get networkEquipment(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["networkequipment"], "NetworkEquipmentParams">(this.request, "networkequipment")
    }

    get passiveDCEquipment(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["PassiveDCEquipment"], "getAnItem">(this.request, "PassiveDCEquipment")
    }

    get PDU(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["pdu"], "getAnItem">(this.request, "pdu")
    }

    get peripheral(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["peripheral"], "PeripheralParams">(this.request, "peripheral")
    }

    get phone(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["phone"], "PhoneParams">(this.request, "phone")
    }

    get printer(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["printer"], "PrinterParams">(this.request, "printer")
    }

    get rack(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["rack"], "getAnItem">(this.request, "rack")
    }

    get software(){
    return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["software"], "getAnItem">(this.request, "software")
    }

    get unmanaged(){
        return new GLPIRequestHandler<AdministrationInterface, AdministrationInterface["unmanaged"], "getAnItem">(this.request, "unmanaged")
    }

}
type AdministrationInterface = InterfacesMap["ActivesInterface"]
export default ActivesService;