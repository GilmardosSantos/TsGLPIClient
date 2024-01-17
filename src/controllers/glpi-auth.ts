import axios from "axios";
import { AuthResponse } from "@models/auth";
import { GLPIClientInterface } from "@models/main";

export class GLPIAuth {
    constructor(private auth: GLPIClientInterface){
        this.auth = { ...auth };
    }

    public async authenticateWithToken(){
        return axios.post<AuthResponse>(
            `${this.auth.glpi_url}/initSession`,
            {
                'app_token': this.auth.app_token,
                'user_token': this.auth.user_token
            }
        ).then(async (response) => {
            return response.data
        }).catch((err) => {
            console.log(err)
            throw err;
        })
    }
}