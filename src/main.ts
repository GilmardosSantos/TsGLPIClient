import { Auth } from "./controllers/auth";
import { Requests } from "./controllers/requests";
import { environment } from './config/environment'
import { GlpiClientInterface } from "./models/main";

export class GlpiClient{

    constructor(private glpiClient: GlpiClientInterface){
        console.log(glpiClient)
        this.glpiClient = { ...glpiClient };
    }

    public async authenticateWithUserToken(){
        const { glpi_url, app_token } = this.glpiClient;
        return new Auth(this.glpiClient).authenticateWithToken().then(glpi => {
            const { session_token } = glpi;
            return new Requests({session_token, glpi_url, app_token});
        }).catch(err => {
            throw new Error("Was not possible authenticate at GLPI");
        })
    }

}



new GlpiClient({...environment.dev})