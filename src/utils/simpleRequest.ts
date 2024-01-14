import axios from 'axios';
import { REQUESTS, RequestsType } from '../models/requests';

export function requestItem(this: REQUESTS,glpiRequest: RequestsType, id = '', params = {'range': '0-999'}){

    return axios.create(
        {
            baseURL: this.glpi_url,
            headers: {
                "App-Token": this.app_token,
                "Session-Token": this.session_token
            },
            params
        }
    ).get(`${glpiRequest}/${id}`)
}

export function requestItens(this: REQUESTS,glpiRequest: RequestsType, params = {'range': '0-999'}){
    return axios.create(
        {
            baseURL: this.glpi_url,
            headers: {
                "App-Token": this.app_token,
                "Session-Token": this.session_token
            },
            params
        }
    ).get(`${glpiRequest}/`)
}