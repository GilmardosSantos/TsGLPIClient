import { GLPIGetActiveErrorHandle } from "../handlers/active.handler";
import { Cable } from "../models/actives/computer/cable.model";
import { CartridgeItem } from "../models/actives/computer/cartridgeitem.model";
import { Computer } from "../models/actives/computer/computer.model";
import { ConsumableItem } from "../models/actives/computer/consumableitem.model";
import { Device } from "../models/actives/computer/device.model";
import { Enclosure } from "../models/actives/computer/enclosure.model";
import { Item_Device } from "../models/actives/computer/item_device.model";
import { Monitor } from "../models/actives/computer/monitor.model";
import { NetworkEquipament } from "../models/actives/computer/networkequipament.model";
import { PassivedCEquipament } from "../models/actives/computer/passivedcequipment.model";
import { PDU } from "../models/actives/computer/pdu.model";
import { Phone } from "../models/actives/computer/phone.model";
import { Printer } from "../models/actives/computer/printer.model";
import { Rack } from "../models/actives/computer/rack.model";
import { Software } from "../models/actives/computer/software.model";
import { Unmanaged } from "../models/actives/computer/unmanaged.model";
import { requestItem, requestItens } from "../utils/simpleRequest";

export class GlpiActives {

    constructor(private auth: { session_token: string, glpi_url: string, app_token: string }){
      this.auth = {... auth};
    }

    public async getCable(id: string, params?: any): Promise<Cable>{
        try {
            return (await requestItem.bind(this.auth)('Cable', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Cable', id);
        }
    }

    public async getCables(params?: any): Promise<Cable[]>{
        try {
            return (await requestItens.bind(this.auth)('Cable', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Cable');
        }
    }

    public async getCartridgeItem(id: string, params?: any): Promise<CartridgeItem>{
        try {
            return (await requestItem.bind(this.auth)('CartridgeItem', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('CartridgeItem', id);
        }
    }

    public async getCartridgeItens(params?: any): Promise<CartridgeItem[]>{
        try {
            return (await requestItens.bind(this.auth)('CartridgeItem', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('CartridgeItem');
        }
    }


    public async getComputer(id: string, params?: any): Promise<Computer>{
        try {
            return (await requestItem.bind(this.auth)('Computer', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('CartridgeItem', id);
        }
    }

    public async getComputers(params?: any): Promise<Computer[]>{
        try {
            return (await requestItens.bind(this.auth)('Computer', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('CartridgeItem');
        }
    }

    public async getConsumableItem(id: string, params?: any): Promise<ConsumableItem>{
        try {
            return (await requestItem.bind(this.auth)('ConsumableItem', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('ConsumableItem', id);
        }
    }

    public async getConsumableItens(params?: any): Promise<ConsumableItem[]>{
        try {
            return (await requestItens.bind(this.auth)('ConsumableItem', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('ConsumableItem');
        }
    }

    public async getDevice(id: string, params?: any): Promise<Device>{
        try {
            return (await requestItem.bind(this.auth)('Devices', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Devices', id);
        }
    }

    public async getDevices(params?: any): Promise<Device[]>{
        try {
            return (await requestItens.bind(this.auth)('Devices', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Devices');
        }
    }

    public async getEnclosure(id: string, params?: any): Promise<Enclosure>{
        try {
            return (await requestItem.bind(this.auth)('Enclosure', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Enclosure', id);
        }
    }

    public async getEnclosures(params?: any): Promise<Enclosure[]>{
        try {
            return (await requestItens.bind(this.auth)('Enclosure', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Enclosure');
        }
    }

    public async getItemDevice(id: string, params?: any): Promise<Item_Device>{
        try {
            return (await requestItem.bind(this.auth)('Item_Device', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Item_Device', id);
        }
    }

    public async getItemDevices(params?: any): Promise<Item_Device[]>{
        try {
            return (await requestItens.bind(this.auth)('Item_Device', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Item_Device');
        }
    }

    public async getMonitor(id: string, params?: any): Promise<Monitor>{
        try {
            return (await requestItem.bind(this.auth)('Monitor', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Monitor', id);
        }
    }

    public async getMonitors(params?: any): Promise<Monitor>{
        try {
            return (await requestItens.bind(this.auth)('Monitor', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Monitor');
        }
    }

    public async getNetworkEquipament(id: string, params?: any): Promise<NetworkEquipament[]>{
        try {
            return (await requestItem.bind(this.auth)('NetworkEquipament',id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('NetworkEquipament', id);
        }
    }

    public async getNetworkEquipaments(params?: any): Promise<NetworkEquipament[]>{
        try {
            return (await requestItens.bind(this.auth)('NetworkEquipament', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('NetworkEquipament');
        }
    }

    public async getPassivedCEquipament(id: string, params?: any): Promise<PassivedCEquipament[]>{
        try {
            return (await requestItem.bind(this.auth)('PassivedCEquipament', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('PassivedCEquipament', id);
        }
    }

    public async getPassivedCEquipaments(params?: any): Promise<PassivedCEquipament[]>{
        try {
            return (await requestItens.bind(this.auth)('PassivedCEquipament', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('PassivedCEquipament');
        }
    }

    public async getPDU(id: string, params?: any): Promise<PDU[]>{
        try {
            return (await requestItem.bind(this.auth)('Pdu', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Pdu', id);
        }
    }

    public async getPDUs(params?: any): Promise<PDU[]>{
        try {
            return (await requestItens.bind(this.auth)('Pdu', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Pdu');
        }
    }

    public async getPhone(id: string, params?: any): Promise<Phone[]>{
        try {
            return (await requestItem.bind(this.auth)('Phone', id, params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Phone', id);
        }
    }

    public async getPhones(params?: any): Promise<Phone[]>{
        try {
            return (await requestItens.bind(this.auth)('Phone', params)).data;
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Phone');
        }
    }

    public async getPrinter(id: string, params?: any): Promise<Printer[]>{
        try {
            return (await requestItem.bind(this.auth)('Printer', id, params)).data
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Printer', id);
        }
    }

    public async getPrinters(params?: any): Promise<Printer[]>{
        try {
            return (await requestItens.bind(this.auth)('Printer', params)).data
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Printer');
        }
    }

    public async getRack(id: string, params?: any): Promise<Rack[]>{
        try {
            return (await requestItem.bind(this.auth)('Rack', id, params)).data
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Rack', id);
        }
    }

    public async getRacks(params?: any): Promise<Rack[]>{
        try {
            return (await requestItens.bind(this.auth)('Rack', params)).data
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Rack');
        }
    }

    public async getSoftware(id: string, params?: any): Promise<Software[]>{
        try {
            return (await requestItem.bind(this.auth)('Software', id, params)).data
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Software', id);
        }
    }

    public async getSoftwares(params?: any): Promise<Software[]>{
        try {
            return (await requestItens.bind(this.auth)('Software', params)).data
        } catch (err) {
            throw GLPIGetActiveErrorHandle('Software');
        }
    }

    public async getUnmanaged(id: string, params?: any): Promise<Unmanaged[]>{
        try {
            return (await requestItem.bind(this.auth)('Unmanaged', id, params)).data
        } catch (err) {
           throw GLPIGetActiveErrorHandle('Unmanaged', id);
        }
    }

    public async getUnmanageds(params?: any): Promise<Unmanaged[]>{
        try {
            return (await requestItens.bind(this.auth)('Unmanaged', params)).data
        } catch (err) {
           throw GLPIGetActiveErrorHandle('Unmanaged');
        }
    }




}