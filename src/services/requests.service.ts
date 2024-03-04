import ActivesService from "./actives/actives.service";
import { GLPIAuthenticationResponse } from "../interfaces/services/authentication.model";
import AdministrationService from "./administration/administration.service";
import AssistanceService from "./assistance/assistance.service";
import DropdownService from "./dropdown/dropdown.service";
import ManagementService from "./managament/managament.service";
import ToolsService from "./tools/tools.service";

class RequestService {
  public requests!: GLPIAuthenticationResponse;
  constructor(requests: GLPIAuthenticationResponse) {
    this.requests = { ...requests };
  }

  public get actives() {
    return new ActivesService(this.requests);
  }
  public get administration() {
    return new AdministrationService(this.requests);
  }
  public get assistance() {
    return new AssistanceService(this.requests);
  }
  public get dropdown() {
    return new DropdownService(this.requests);
  }
  public get management() {
    return new ManagementService(this.requests);
  }
  public get tools() {
    return new ToolsService(this.requests);
  }
}

export default RequestService;
