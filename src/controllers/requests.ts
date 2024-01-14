import axios from 'axios';
import { RequestsType } from '../models/requests';
import { GlpiActives } from './actives';

export class Requests {
    constructor(
        public auth: {
            session_token: string,
            glpi_url: string,
            app_token: string,
        }
        ){
            this.auth = { ...auth };
    }

    public async simpleRequest<RequestType>(glpiRequest: RequestsType, id = '', params = {'range': '0-999'}){
        return axios.create(
            {
                baseURL: this.auth.glpi_url,
                headers: {
                    "App-Token": this.auth.app_token,
                    "Session-Token": this.auth.session_token
                },
                params
            }
        ).get(`${glpiRequest}/${id}`)
    }

    public getActives() {
        return new GlpiActives(this.auth);
    }
}