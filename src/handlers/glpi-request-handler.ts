
import { GLPIAuthenticationResponse } from "../interfaces/services/authentication.model";
import { WebRequestInit } from "../interfaces/utils/web-request";
import WebRequest from "../utils/web-request";
import { GLPIParamType, GetAnItem, GetAllItems } from "../interfaces/services/requests.model";

export class GLPIRequestHandler<RequestMap, ResType, ParamType extends keyof GLPIParamType>{
    constructor(private request: GLPIAuthenticationResponse, private itemType: keyof RequestMap){
        this.request = { ...request };
        this.itemType = itemType;
    }

    private get getDefaultInit(): WebRequestInit{
        return {
            headers: {
                'Content-Type': "application/json",
                'App-Token': this.request.app_token,
                'Session-Token': this.request.session_token
            }
        }
    }

    private get webRequest(){
        return new WebRequest()
        .create(this.request.glpi_url)
    }

    public async getById<ExtendParam>(id: string | number, params?: GLPIParamType[ParamType] | GetAnItem){
        const defaultInit = {...this.getDefaultInit, params}
        return this.webRequest
        .get<ResType & ExtendParam>(`${this.itemType.toString()}/${id.toString()}`, defaultInit)
        .then(response => { 
            return response
        });
    }

    public async getAll<ExtendedParam>(params?: GLPIParamType[ParamType] | GetAllItems){
        if (params) this.getDefaultInit.params = params;
        return this.webRequest
        .get<ResType[] & ExtendedParam>(`${this.itemType.toString()}/`, this.getDefaultInit)
        .then(response => { return response})
    }

    public async addItem(itemToAdd: ResType, params?: GLPIParamType){
        if (params) this.getDefaultInit.params = params;
        return this.webRequest
        .post(this.itemType.toString(), {...this.getDefaultInit, body: { input: itemToAdd}})
        .then(response => { return response});
    }

    public async updateById(itemToUpdate: ResType & {id: number}, params?: GLPIParamType){
        if (params) this.getDefaultInit.params = params;
        return this.webRequest
        .put(this.itemType.toString(), { ...this.getDefaultInit, body: { input: itemToUpdate } })
        .then(response => { return response});
    }
}