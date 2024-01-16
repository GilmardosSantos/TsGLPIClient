import axios, { CreateAxiosDefaults } from 'axios';
import { REQUESTS } from '../models/requests';

type GenericParams = {
    range: string
}

export class RequestsHandler<RequestsMap, ParamsType extends GenericParams = GenericParams>{
    private app_token!: string;
    private glpi_url!: string;
    private session_token!: string;

    constructor({ app_token, glpi_url, session_token}: REQUESTS) {
        this.app_token = app_token;
        this.glpi_url = glpi_url;
        this.session_token = session_token;
    }

    private get GLPIAxios(): CreateAxiosDefaults{
        return {
            baseURL: this.glpi_url,
            headers: {
                'App-Token': this.app_token,
                'Session-Token': this.session_token
            }
        }
    }

    private defaultParams = { 'range': '0-999'} as ParamsType;


    public request = {
        item: async <RequestsTypes extends keyof RequestsMap>(request_type: RequestsTypes, id: string | number, params = this.defaultParams) => {
            try {
                return axios.create({ ...this.GLPIAxios, params}).get<RequestsMap[RequestsTypes]>(`${request_type.toString()}/${id}`);
            } catch (axiosError) {
                throw axiosError
            }
        },
        items: async <RequestsTypes extends keyof RequestsMap>(request_type: RequestsTypes, params = this.defaultParams) => {
            try {
                return axios.create({ ...this.GLPIAxios, params}).get<RequestsMap[RequestsTypes][]>(`${request_type.toString()}/`);
            } catch (axiosError) {
                throw axiosError
            }
        },
        
    }

}

