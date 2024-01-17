import { Auth } from "@controllers/auth";
import { environment } from '@config/environment'
import { GLPIClientInterface } from "@models/main";
import { GLPIRequests } from "@controllers/glpi-requests";

export class GLPIClient{

    constructor(private glpiClient: GLPIClientInterface){
        console.log(glpiClient)
        this.glpiClient = { ...glpiClient };
        this.authenticateWithUserToken()
        .then(client => {
            client.Dropdown.Types.getPrintersTypes().then(response => {
                console.log("Response", response);
            }).catch((err) =>{
                console.error(err)
            })
        })
    }

    public async authenticateWithUserToken(){
        const { glpi_url, app_token } = this.glpiClient;
        return new Auth(this.glpiClient).authenticateWithToken().then(glpi => {
            const { session_token } = glpi;
            return new GLPIRequests({session_token, glpi_url, app_token});
        }).catch(err => {
            throw new Error("Was not possible authenticate at GLPI");
        })
    }
}



new GLPIClient({...environment.dev})