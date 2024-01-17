import { REQUESTS } from "@models/requests";
import { RequestsHandler } from "@handlers/request-handler";
import { ToolsTypesMap } from "@models/controllers/tools/tools.model";
import { GLPIGetErrorHandler } from "@handlers/errors/glpi-get-error.handler";

export class GLPITools extends RequestsHandler<ToolsTypesMap>{
    constructor(auth: REQUESTS){
        super(auth);
    }

    public async getKnowbaseItem(id: string | number, params?: any){
        try {
            return (await this.request.item('KnowbaseItem', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'KnowbaseItem', err, id})
        }
    }

    public async getKnowbaseItens(params?: any){
        try {
            return (await this.request.items('KnowbaseItem', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'KnowbaseItem', err})
        }
    }

    public async getProject(id: string | number, params?: any){
        try {
            return (await this.request.item('Project', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'Project', err, id})
        }
    }

    public async getProjects(params?: any){
        try {
            return (await this.request.items('Project', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'Project', err})
        }
    }

    public async getReminder(id: string | number, params?: any){
        try {
            return (await this.request.item('Reminder', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'Reminder', err, id})
        }
    }

    public async getReminders(params?: any){
        try {
            return (await this.request.items('Reminder', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'Reminder', err})
        }
    }

    public async getReport(id: string | number, params?: any){
        try {
            return (await this.request.item('Report', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'Report', err, id})
        }
    }

    public async getReports(params?: any){
        try {
            return (await this.request.items('Report', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'Report', err})
        }
    }

    public async getReservationItem(id: string | number, params?: any){
        try {
            return (await this.request.item('ReservationItem', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'ReservationItem', err, id})
        }
    }

    public async getReservationItens(params?: any){
        try {
            return (await this.request.items('ReservationItem', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'ReservationItem', err})
        }
    }

    public async getRSSFeed(id: string | number, params?: any){
        try {
            return (await this.request.item('RSSFeed', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'RSSFeed', err, id})
        }
    }

    public async getRSSFeeds(params?: any){
        try {
            return (await this.request.items('RSSFeed', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'RSSFeed', err})
        }
    }

    public async getSavedSearch(id: string | number, params?: any){
        try {
            return (await this.request.item('SavedSearch', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'SavedSearch', err, id})
        }
    }

    public async getSavedSearchs(params?: any){
        try {
            return (await this.request.items('SavedSearch', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ToolsTypesMap>({active_type: 'SavedSearch', err})
        }
    }

}