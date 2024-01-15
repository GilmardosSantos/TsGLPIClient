import { Dictionnary } from "../models/administration/dictionnary.model";
import { Entity } from "../models/administration/entity.model";
import { Event } from "../models/administration/event.model";
import { Group } from "../models/administration/group.model";
import { Profile } from "../models/administration/profile.model";
import { QueuedNotification } from "../models/administration/queuednotification.model";
import { Rule } from "../models/administration/rule.model";
import { User } from "../models/administration/user.model";
import { REQUESTS } from "../models/requests";
import { requestItem, requestItens } from "../utils/simpleRequest";

export class GlpiAdministration {
    constructor(private auth: REQUESTS) {
        this.auth = { ...auth };
    }

    async getDictionnary(id: string | number, params?: any): Promise<Dictionnary>{
        try {
            return (await requestItem.bind(this.auth)('Dictionnary', String(id), params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getDictionnaries(params?: any): Promise<Dictionnary[]>{
        try {
            return (await requestItens.bind(this.auth)('Dictionnary', params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getEntity(id: string | number, params?: any): Promise<Entity>{
        try {
            return (await requestItem.bind(this.auth)('Entity', String(id), params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getEntities(params?: any): Promise<Entity[]>{
        try {
            return (await requestItens.bind(this.auth)('Entity', params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getEvent(id: string | number, params?: any): Promise<Event>{
        try {
            return (await requestItem.bind(this.auth)('Event', String(id), params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getEvents(params?: any): Promise<Event[]>{
        try {
            return (await requestItens.bind(this.auth)('Events' as any,params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getGroup(id: string | number, params?: any): Promise<Group>{
        try {
            return (await requestItem.bind(this.auth)('Group', String(id), params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getGroups(params?: any): Promise<Group[]>{
        try {
            return (await requestItens.bind(this.auth)('Group',params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getProfile(id: string | number, params?: any): Promise<Profile>{
        try {
            return (await requestItem.bind(this.auth)('Profile', String(id), params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getProfiles(params?: any): Promise<Profile[]>{
        try {
            return (await requestItens.bind(this.auth)('Profile',params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getQueuedNotification(id: string | number, params?: any): Promise<QueuedNotification>{
        try {
            return (await requestItem.bind(this.auth)('QueuedNotification', String(id), params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getQueuedNotifications(params?: any): Promise<QueuedNotification[]>{
        try {
            return (await requestItens.bind(this.auth)('QueuedNotification',params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getRule(id: string | number, params?: any): Promise<Rule>{
        try {
            return (await requestItem.bind(this.auth)('Rule', String(id), params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getRules(params?: any): Promise<Rule[]>{
        try {
            return (await requestItens.bind(this.auth)('Rule',params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getUser(id: string | number, params?: any): Promise<User>{
        try {
            return (await requestItem.bind(this.auth)('User', String(id), params)).data
        } catch (error) {
            throw '';
        }       
    }

    async getUsers(params?: any): Promise<User[]>{
        try {
            return (await requestItens.bind(this.auth)('User',params)).data
        } catch (error) {
            throw '';
        }       
    }


}