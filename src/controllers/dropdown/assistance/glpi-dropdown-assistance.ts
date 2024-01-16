import { DropdownAssistanceMap } from '../../../models/dropdown/assistance/dropdown.assistance.model'
import { REQUESTS } from "../../../models/requests";
import { RequestsHandler } from '../../../handlers/request-handler';
import { GLPIGetErrorHandler } from '../../../handlers/errors/glpi-get-error-handler';

export class GLPIDropdownAssistance extends RequestsHandler<DropdownAssistanceMap>{

    constructor(auth: REQUESTS){
        super(auth)
    }

    public async getItilCategory(id: string | number, params?: any){
        try {
            return (await this.request.item('ItilCategory', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ItilCategory', id, err})
        }
    }

    public async getItilCategories(params?: any){
        try {
            return (await this.request.items('ItilCategory', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ItilCategory',  err})
        }
    }

    public async getItilFollowupTemplate(id: string | number, params?: any){
        try {
            return (await this.request.item('ItilFollowupTemplate', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ItilFollowupTemplate', id, err})
        }
    }

    public async getItilFollowupTemplates(params?: any){
        try {
            return (await this.request.items('ItilFollowupTemplate', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ItilFollowupTemplate',  err})
        }
    }

    public async getPendingReason(id: string | number, params?: any){
        try {
            return (await this.request.item('PendingReason', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'PendingReason', id, err})
        }
    }

    public async getPendingReasons(params?: any){
        try {
            return (await this.request.items('PendingReason', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'PendingReason',  err})
        }
    }

    public async getPlanningEventCategory(id: string | number, params?: any){
        try {
            return (await this.request.item('PlanningEventCategory', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'PlanningEventCategory', id, err})
        }
    }

    public async getPlanningEventCategories(params?: any){
        try {
            return (await this.request.items('PlanningEventCategory', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'PlanningEventCategory',  err})
        }
    }

    public async getPlanningExternalEventTemplate(id: string | number, params?: any){
        try {
            return (await this.request.item('PlanningExternalEventTemplate', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'PlanningExternalEventTemplate', id, err})
        }
    }

    public async getPlanningExternalEventTemplates(params?: any){
        try {
            return (await this.request.items('PlanningExternalEventTemplate', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'PlanningExternalEventTemplate',  err})
        }
    }

    public async getProjectState(id: string | number, params?: any){
        try {
            return (await this.request.item('ProjectState', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ProjectState', id, err})
        }
    }

    public async getProjectStates(params?: any){
        try {
            return (await this.request.items('ProjectState', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ProjectState',  err})
        }
    }

    public async getProjectTaskTemplate(id: string | number, params?: any){
        try {
            return (await this.request.item('ProjectTaskTemplate', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ProjectTaskTemplate', id, err})
        }
    }

    public async getProjectTaskTemplates(params?: any){
        try {
            return (await this.request.items('ProjectTaskTemplate', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ProjectTaskTemplate',  err})
        }
    }

    public async getProjectTaskType(id: string | number, params?: any){
        try {
            return (await this.request.item('ProjectTaskType', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ProjectTaskType', id, err})
        }
    }

    public async getProjectTaskTypes(params?: any){
        try {
            return (await this.request.items('ProjectTaskType', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ProjectTaskType',  err})
        }
    }

    public async getProjectType(id: string | number, params?: any){
        try {
            return (await this.request.item('ProjectType', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ProjectType', id, err})
        }
    }

    public async getProjectTypes(params?: any){
        try {
            return (await this.request.items('ProjectType', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'ProjectType',  err})
        }
    }

    public async getRequestType(id: string | number, params?: any){
        try {
            return (await this.request.item('RequestType', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'RequestType', id, err})
        }
    }

    public async getRequestTypes(params?: any){
        try {
            return (await this.request.items('RequestType', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'RequestType',  err})
        }
    }

    public async getSolutionTemplate(id: string | number, params?: any){
        try {
            return (await this.request.item('SolutionTemplate', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'SolutionTemplate', id, err})
        }
    }

    public async getSolutionTemplates(params?: any){
        try {
            return (await this.request.items('SolutionTemplate', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'SolutionTemplate',  err})
        }
    }

    public async getSolutionType(id: string | number, params?: any){
        try {
            return (await this.request.item('SolutionType', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'SolutionType', id, err})
        }
    }

    public async getSolutionTypes(params?: any){
        try {
            return (await this.request.items('SolutionType', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'SolutionType',  err})
        }
    }

    public async getTaskCategory(id: string | number, params?: any){
        try {
            return (await this.request.item('TaskCategory', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'TaskCategory', id, err})
        }
    }

    public async getTaskCategories(params?: any){
        try {
            return (await this.request.items('TaskCategory', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'TaskCategory',  err})
        }
    }

    public async getTaskTemplate(id: string | number, params?: any){
        try {
            return (await this.request.item('TaskTemplate', id, params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'TaskTemplate', id, err})
        }
    }

    public async getTaskTemplates(params?: any){
        try {
            return (await this.request.items('TaskTemplate', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof DropdownAssistanceMap>({ active_type: 'TaskTemplate',  err})
        }
    }
}