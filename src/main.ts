import { GLPIApiInterface } from "./interfaces/main";
import { GLPIApiAuthenticationService } from "./services/authentication.service";

export default class GLPIApi {

    constructor(private glpiApi: GLPIApiInterface){
        this.glpiApi = { ...glpiApi };
    }

    get authenticate() {
        return new GLPIApiAuthenticationService(this.glpiApi);
    }
}
