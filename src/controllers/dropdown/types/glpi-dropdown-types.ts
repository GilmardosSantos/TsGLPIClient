import { GLPIGetErrorHandler } from "../../../handlers/errors/glpi-get-error-handler";
import { RequestsHandler } from "../../../handlers/request-handler";
import { DropdownTypesMap } from "../../../models/dropdown/types/dropdown.types.model";
import { REQUESTS } from "../../../models/requests";

export class GLPIDropdownTypes extends RequestsHandler<DropdownTypesMap>{
    constructor( auth: REQUESTS) {
        super(auth)
    }

    async getComputerType(id: string | number, params?: any){
        try {
            return (await this.request.item('ComputerType', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'ComputerType', id, err})
        }
    }

    async getComputersTypes(params?: any){
        try {
            return (await this.request.items('ComputerType',  params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'ComputerType', err})
        }
    }

    async getMonitorType(id: string | number, params?: any){
        try {
            return (await this.request.item('MonitorType', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'MonitorType', id, err})
        }
    }

    async getMonitorsTypes(params?: any){
        try {
            return (await this.request.items('MonitorType',  params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'MonitorType', err})
        }
    }

    async getNetworkEquipmentType(id: string | number, params?: any){
        try {
            return (await this.request.item('NetworkEquipmentType', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'NetworkEquipmentType', id, err})
        }
    }

    async getNetworkEquipmentsTypes(params?: any){
        try {
            return (await this.request.items('NetworkEquipmentType',  params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'NetworkEquipmentType', err})
        }
    }

    async getPeripheralType(id: string | number, params?: any){
        try {
            return (await this.request.item('PeripheralType', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'PeripheralType', id, err})
        }
    }

    async getPeripheralsTypes(params?: any){
        try {
            return (await this.request.items('PeripheralType',  params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'PeripheralType', err})
        }
    }

    async getPhoneType(id: string | number, params?: any){
        try {
            return (await this.request.item('PhoneType', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'PhoneType', id, err})
        }
    }

    async getPhonesTypes(params?: any){
        try {
            return (await this.request.items('PhoneType',  params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'PhoneType', err})
        }
    }

    async getPrinterType(id: string | number, params?: any){
        try {
            return (await this.request.item('PrinterType', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'PrinterType', id, err})
        }
    }

    async getPrintersTypes(params?: any){
        try {
            return (await this.request.items('PrinterType',  params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownTypesMap>({active_type: 'PrinterType', err})
        }
    }

}