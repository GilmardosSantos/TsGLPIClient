import { DropdownCommonMap } from "../../../models/dropdown/common/dropdown.common.model";
import { REQUESTS } from "../../../models/requests";
import { RequestsHandler } from "../../../handlers/request-handler";
import { GLPIGetErrorHandler } from "../../../handlers/errors/glpi-get-error-handler";

export class GLPIDropdownCommon extends RequestsHandler<DropdownCommonMap>{

    constructor(auth: REQUESTS) {
        super(auth);
    }

    public async getBlacklist(id: string | number, params?: any){
        try {
            return (await this.request.item('Blacklist', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'Blacklist', id, err});
        }
    }

    public async getBlacklists(params?: any){
        try {
            return (await this.request.items('Blacklist', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'Blacklist', err});
        }
    }

    public async getBlacklistedMailContent(id: string | number, params?: any){
        try {
            return (await this.request.item('BlacklistedMailContent', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'BlacklistedMailContent', id, err});
        }
    }

    public async getBlacklistedMailContents(params?: any){
        try {
            return (await this.request.items('BlacklistedMailContent', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'BlacklistedMailContent', err});
        }
    }

    public async getLocation(id: string | number, params?: any){
        try {
            return (await this.request.item('Location', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'Location', id, err});
        }
    }

    public async getLocations(params?: any){
        try {
            return (await this.request.items('Location', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'Location', err});
        }
    }

    public async getManufacturer(id: string | number, params?: any){
        try {
            return (await this.request.item('Manufacturer', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'Manufacturer', id, err});
        }
    }

    public async getManufacturers(params?: any){
        try {
            return (await this.request.items('Manufacturer', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'Manufacturer', err});
        }
    }

    public async getState(id: string | number, params?: any){
        try {
            return (await this.request.item('State', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'State', id, err});
        }
    }

    public async getStates(params?: any){
        try {
            return (await this.request.items('State', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownCommonMap>({active_type: 'State', err});
        }
    }
}