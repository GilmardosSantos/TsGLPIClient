import { GLPIAuthenticationResponse } from "../../interfaces/services/authentication.model";

class DropdownService {
    constructor(private request: GLPIAuthenticationResponse){
        this.request = { ...request };
    }
}

export default DropdownService;