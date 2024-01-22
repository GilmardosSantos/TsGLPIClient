import ActivesService from "./actives/actives.service";
import { GLPIAuthenticationResponse } from "@interfaces/services/authentication.model";
import AdministrationService from "./administration/administration.service";
import AssistanceService from "./assistance/assistance.service";
import DropdownService from "./dropdown/dropdown.service";
import ManagementService from "./managament/managament.service";
import ToolsService from "./tools/tools.service";

class RequestService {

    constructor(private requests: GLPIAuthenticationResponse){
        this.requests = { ...requests };
    }

    get actives() { return new ActivesService(this.requests)};
    get administration() { return new AdministrationService(this.requests)};
    get assistance() { return new AssistanceService(this.requests)};
    get dropdown() { return new DropdownService(this.requests)};
    get management() { return new ManagementService(this.requests)};
    get tools() { return new ToolsService(this.requests)};

}

export default RequestService;