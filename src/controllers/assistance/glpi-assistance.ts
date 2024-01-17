import { AssistanceRequestsMap } from '@models/controllers/assistance/assistance.model'
import { REQUESTS } from "@models/requests";
import { RequestsHandler } from "@handlers/request-handler";
import { GLPIGetErrorHandler } from '@handlers/errors/glpi-get-error.handler';

export class GLPIAssistance extends RequestsHandler<AssistanceRequestsMap> {
    constructor(auth: REQUESTS) {
        super(auth);
    }

    public async getChange(id: string | number, params?: any){
        try {
            return (await this.request.item('Change', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'Change', id, err});
        }
    }

    public async getChanges(params?: any){
        try {
            return (await this.request.items('Change', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'Change', err});
        }
    }

    public async getPlanning(id: string | number, params?: any){
        try {
            return (await this.request.item('PlanningExternalEvent', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'PlanningExternalEvent', id, err});
        }
    }

    public async getPlannings(params?: any){
        try {
            return (await this.request.items('PlanningExternalEvent', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'PlanningExternalEvent', err});
        }
    }

    public async getProblem(id: string | number, params?: any){
        try {
            return (await this.request.item('Problem', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'Problem', id, err});
        }
    }

    public async getProblems(params?: any){
        try {
            return (await this.request.items('Problem', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'Problem', err});
        }
    }

    public async getRecurrentChange(id: string | number, params?: any){
        try {
            return (await this.request.item('RecurrentChange', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'RecurrentChange', id, err});
        }
    }

    public async getRecurrentChanges(params?: any){
        try {
            return (await this.request.items('RecurrentChange', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'RecurrentChange', err});
        }
    }

    // public async getStat(id: string | number, params?: any): Promise<Stat>{
    //     try {
    //         return (await this.request.item('Stat', String(id), params)).data;
    //     } catch (err) {
    //         // throw GLPIGetActiveErrorHandle('Cable', id);
    //         throw 'error';
    //     }
    // }

    // public async getStats(params?: any): Promise<Stat[]>{
    //     try {
    //         return (await this.request.items('Stat', params)).data;
    //     } catch (err) {
    //         // throw GLPIGetActiveErrorHandle('Cable', id);
    //         throw 'error';
    //     }
    // }

    public async getTicket(id: string | number, params?: any){
        try {
            return (await this.request.item('Ticket', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'Ticket', id, err});
        }
    }

    public async getTickets(params?: any){
        try {
            return (await this.request.items('Ticket', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'Ticket', err});
        }
    }

    public async getTicketRecurrent(id: string | number, params?: any){
        try {
            return (await this.request.item('TicketRecurrent', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'TicketRecurrent', id, err});
        }
    }

    public async getTicketRecurrents(params?: any){
        try {
            return (await this.request.items('TicketRecurrent', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof AssistanceRequestsMap>({active_type: 'TicketRecurrent', err});
        }
    }

}