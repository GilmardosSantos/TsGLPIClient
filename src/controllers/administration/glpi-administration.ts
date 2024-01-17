import  { AdministrationRequestsMap }  from '@models/controllers/administration/administration.model'
import { REQUESTS } from "@models/requests";
import { RequestsHandler } from "@handlers/request-handler";
import { GLPIGetErrorHandler } from "@handlers/errors/glpi-get-error.handler";

export class GLPIAdministration extends RequestsHandler<AdministrationRequestsMap>{
    
    constructor(auth: REQUESTS) {
        super(auth);
    }

    async getDictionnary(id: string | number, params?: any){
        try {
            return (await this.request.item('Dictionnary', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Dictionnary', id, err});
        }       
    }
 
    async getDictionnaries(params?: any){
        try {
            return (await this.request.items('Dictionnary', params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Dictionnary', err});
        }       
    }

    async getEntity(id: string | number, params?: any){
        try {
            return (await this.request.item('Entity', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Entity', id, err});
        }       
    }

    async getEntities(params?: any){
        try {
            return (await this.request.items('Entity', params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Entity', err});
        }       
    }

    async getEvent(id: string | number, params?: any){
        try {
            return (await this.request.item('Event', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Event', id, err});
        }       
    }

    async getEvents(params?: any){
        try {
            return (await this.request.items('Events' as any,params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Event', err});
        }       
    }

    async getGroup(id: string | number, params?: any){
        try {
            return (await this.request.item('Group', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Group', id, err})
        }       
    }

    async getGroups(params?: any){
        try {
            return (await this.request.items('Group',params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Group', err});
        }       
    }

    async getProfile(id: string | number, params?: any){
        try {
            return (await this.request.item('Profile', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Profile', id, err});
        }       
    }

    async getProfiles(params?: any){
        try {
            return (await this.request.items('Profile',params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Profile', err});
        }       
    }

    async getQueuedNotification(id: string | number, params?: any){
        try {
            return (await this.request.item('QueuedNotification', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'QueuedNotification', id, err});
        }       
    }

    async getQueuedNotifications(params?: any){
        try {
            return (await this.request.items('QueuedNotification',params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'QueuedNotification', err});
        }       
    }

    async getRule(id: string | number, params?: any){
        try {
            return (await this.request.item('Rule', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Rule', id, err});
        }       
    }

    async getRules(params?: any){
        try {
            return (await this.request.items('Rule',params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'Rule', err});
        }       
    }

    async getUser(id: string | number, params?: any){
        try {
            return (await this.request.item('User', id, params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'User', id, err});
        }       
    }

    async getUsers(params?: any){
        try {
            return (await this.request.items('User',params)).data
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AdministrationRequestsMap>({active_type: 'User', err});
        }       
    }


}