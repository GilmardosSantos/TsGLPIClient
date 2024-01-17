import { GLPIGetErrorHandler } from "@handlers/errors/glpi-get-error.handler";
import { ManagementTypesMap } from "@models/controllers/management/management.model";
import { REQUESTS } from "@models/requests";
import { RequestsHandler } from "@handlers/request-handler";

export class GLPIManagement extends RequestsHandler<ManagementTypesMap>{
    constructor(auth: REQUESTS) {
        super(auth);
    }

    public async getAppliance(id: string | number, params?: any){
        try {
            return (await this.request.item('Appliance', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Appliance', err, id});
        }
    }

    public async getAppliances(params?: any){
        try {
            return (await this.request.items('Appliance', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Appliance', err});
        }
    }

    public async getBudget(id: string | number, params?: any){
        try {
            return (await this.request.item('Budget', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Budget', err, id});
        }
    }

    public async getBudgets(params?: any){
        try {
            return (await this.request.items('Budget', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Budget', err});
        }
    }

    public async getCertificate(id: string | number, params?: any){
        try {
            return (await this.request.item('Certificate', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Certificate', err, id});
        }
    }

    public async getCertificates(params?: any){
        try {
            return (await this.request.items('Certificate', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Certificate', err});
        }
    }

    public async getCluster(id: string | number, params?: any){
        try {
            return (await this.request.item('Cluster', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Cluster', err, id});
        }
    }

    public async getClusters(params?: any){
        try {
            return (await this.request.items('Cluster', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Cluster', err});
        }
    }

    public async getContact(id: string | number, params?: any){
        try {
            return (await this.request.item('Contact', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Contact', err, id});
        }
    }

    public async getContacts(params?: any){
        try {
            return (await this.request.items('Contact', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Appliance', err});
        }
    }

    public async getContract(id: string | number, params?: any){
        try {
            return (await this.request.item('Contract', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Contract', err, id});
        }
    }

    public async getContracts(params?: any){
        try {
            return (await this.request.items('Contract', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Contract', err});
        }
    }

    public async getDatabase(id: string | number, params?: any){
        try {
            return (await this.request.item('Database', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Database', err, id});
        }
    }

    public async getDatabases(params?: any){
        try {
            return (await this.request.items('Database', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Database', err});
        }
    }

    public async getDatacenter(id: string | number, params?: any){
        try {
            return (await this.request.item('Datacenter', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Datacenter', err, id});
        }
    }

    public async getDatacenters(params?: any){
        try {
            return (await this.request.items('Datacenter', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Datacenter', err});
        }
    }

    public async getDocument(id: string | number, params?: any){
        try {
            return (await this.request.item('Document', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Document', err, id});
        }
    }

    public async getDocuments(params?: any){
        try {
            return (await this.request.items('Document', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Document', err});
        }
    }

    public async getDomain(id: string | number, params?: any){
        try {
            return (await this.request.item('Domain', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Domain', err, id});
        }
    }

    public async getDomains(params?: any){
        try {
            return (await this.request.items('Domain', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Domain', err});
        }
    }

    public async getLine(id: string | number, params?: any){
        try {
            return (await this.request.item('Line', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Line', err, id});
        }
    }

    public async getLines(params?: any){
        try {
            return (await this.request.items('Line', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'Line', err});
        }
    }

    public async getSoftwareLicense(id: string | number, params?: any){
        try {
            return (await this.request.item('SoftwareLicense', String(id), params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'SoftwareLicense', err, id});
        }
    }

    public async getSoftwareLicenses(params?: any){
        try {
            return (await this.request.items('SoftwareLicense', params)).data;
        } catch (err) {
            throw new GLPIGetErrorHandler<keyof ManagementTypesMap>({active_type: 'SoftwareLicense', err});
        }
    }
}