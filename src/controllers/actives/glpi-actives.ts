import { GLPIGetErrorHandler } from "@handlers/errors/glpi-get-error.handler";
import { ActiveRequestMap } from '@models/controllers/actives/actives.model';
import { REQUESTS } from "@models/requests";
import { RequestsHandler } from "@handlers/request-handler";

export class GLPIActives extends RequestsHandler<ActiveRequestMap>{

    constructor(auth: REQUESTS){
        super(auth);
    }

    public async getCable(id: string, params?: any){
        try {
            return (await this.request.item('Cable', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Cable', id, err});
        }
    }

    public async getCables(params?: any){
        try {
            return (await this.request.items('Cable', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Cable', err});
        }
    }

    public async getCartridgeItem(id: string, params?: any){
        try {
            return (await this.request.item('CartridgeItem', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'CartridgeItem', id, err});
        }
    }

    public async getCartridgeItems(params?: any){
        try {
            return (await this.request.items('CartridgeItem', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Cable', err});

        }
    }


    public async getComputer(id: string, params?: any){
        try {
            return (await this.request.item('Computer', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Computer', id, err});
        }
    }

    public async getComputers(params?: any){
        try {
            return (await this.request.items('Computer', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Computer', err});
        }
    }

    public async getConsumableItem(id: string, params?: any){
        try {
            return (await this.request.item('ConsumableItem', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'ConsumableItem', id, err});

        }
    }

    public async getConsumableItems(params?: any){
        try {
            return (await this.request.items('ConsumableItem', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'ConsumableItem', err});
        }
    }

    
    public async getEnclosure(id: string, params?: any){
        try {
            return (await this.request.item('Enclosure', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Enclosure', id, err});
        }
    }
    
    public async getEnclosures(params?: any){
        try {
            return (await this.request.items('Enclosure', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Enclosure', err});
        }
    }
    
    // public async getItemDevice(id: string, params?: any){
    //     try {
    //         return (await this.request.item('item_devicesimcard.' as any, id, params)).data;
    //     } catch (err) {
    //         throw GLPIGetActiveErrorHandle('Item_DeviceSIMCARD', id);
    //     }
    // }
    
    // public async getItemDevices(params?: any){
    //     try {
    //         return (await this.request.items('item_device' as any, params)).data;
    //     } catch (err) {
    //         throw GLPIGetActiveErrorHandle('Item_DeviceSIMCARD');
    //     }
    // }
    
    public async getMonitor(id: string, params?: any){
        try {
            return (await this.request.item('Monitor', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'ConsumableItem', id, err});

        }
    }
    
    public async getMonitors(params?: any){
        try {
            return (await this.request.items('Monitor', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'ConsumableItem', err});

        }
    }
    
    // public async getNetworkEquipament(id: string, params?: any){
    //     try {
    //         return (await this.request.item('NetworkEquipament',id, params)).data;
    //     } catch (err) {
    //         throw GLPIGetActiveErrorHandle('NetworkEquipament', id);
    //     }
    // }
    
    // public async getNetworkEquipaments(params?: any){
    //     try {
    //         return (await this.request.items('networkequipament' as any, params)).data;
    //     } catch (err) {
    //         throw GLPIGetActiveErrorHandle('NetworkEquipament');
    //     }
    // }
    
    // public async getPassivedCEquipament(id: string, params?: any){
    //     try {
    //         return (await this.request.item('PassivedCEquipament', id, params)).data;
    //     } catch (err) {
    //         throw GLPIGetActiveErrorHandle('PassivedCEquipament', id);
    //     }
    // }
    
    // public async getPassivedCEquipaments(params?: any){
    //     try {
    //         return (await this.request.items('PassivedCEquipament', params)).data;
    //     } catch (err) {
    //         throw GLPIGetActiveErrorHandle('PassivedCEquipament');
    //     }
    // }
    
    public async getPDU(id: string, params?: any){
        try {
            return (await this.request.item('Pdu', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Pdu', id, err});
        }
    }
    
    public async getPDUs(params?: any){
        try {
            return (await this.request.items('Pdu', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Pdu', err});
        }
    }
    
    public async getPeripheral(id: string, params?: any){
        try {
            return (await this.request.item('Peripheral', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Peripheral', id, err});

        }
    }

    public async getPeripherals(params?: any){
        try {
            return (await this.request.items('Peripheral' as any, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Peripheral', err});
        }
    }

    public async getPhone(id: string, params?: any){
        try {
            return (await this.request.item('Phone', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Phone', id, err});
        }
    }

    public async getPhones(params?: any){
        try {
            return (await this.request.items('Phone', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Phone', err});
        }
    }

    public async getPrinter(id: string, params?: any){
        try {
            return (await this.request.item('Printer', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Printer', id, err});

        }
    }

    public async getPrinters(params?: any){
        try {
            return (await this.request.items('Printer', params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Printer', err});

        }
    }

    public async getRack(id: string, params?: any){
        try {
            return (await this.request.item('Rack', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Rack', id, err});
        }
    }

    public async getRacks(params?: any){
        try {
            return (await this.request.items('Rack', params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Rack', err});
        }
    }

    // public async getSoftware(id: string, params?: any){
    //     try {
    //         return (await this.request.item('Software', id, params)).data
    //     } catch (err) {
    //         throw GLPIGetActiveErrorHandle('Software', id);
    //     }
    // }

    // public async getSoftwares(params?: any){
    //     try {
    //         return (await this.request.items('Software', params)).data
    //     } catch (err) {
    //         throw GLPIGetActiveErrorHandle('Software');
    //     }
    // }

    public async getUnmanaged(id: string, params?: any){
        try {
            return (await this.request.item('Unmanaged', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Unmanaged', id, err});
        }
    }

    public async getUnmanageds(params?: any){
        try {
            return (await this.request.items('Unmanaged', params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ActiveRequestMap>({active_type: 'Unmanaged', err});
        }
    }
}