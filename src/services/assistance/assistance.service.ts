import { GLPIRequestHandler } from "../../handlers/glpi-request-handler";
import { GLPIAuthenticationResponse } from "../../interfaces/services/authentication.model";
import { InterfacesMap } from "../../interfaces/interfaces.module";

class AssistanceService {
    constructor(private request: GLPIAuthenticationResponse){
        this.request = { ...request };
    }
    
    public get change(){
        return new GLPIRequestHandler<AssistanceInterface, AssistanceInterface["change"], "getAnItem">(this.request, "change")
    }

    public get planningExternalEvent(){
        return new GLPIRequestHandler<AssistanceInterface, AssistanceInterface["planningExternalEvent"], "getAnItem">(this.request, "planningExternalEvent")
    }

    public get problem(){
        return new GLPIRequestHandler<AssistanceInterface, AssistanceInterface["problem"], "getAnItem">(this.request, "problem")
    }

    public get recurrentChange(){
        return new GLPIRequestHandler<AssistanceInterface, AssistanceInterface["recurrentChange"], "getAnItem">(this.request, "recurrentChange")
    }

    public get stat(){
        return new GLPIRequestHandler<AssistanceInterface, AssistanceInterface["stat"], "getAnItem">(this.request, "stat")
    }

    public get ticket(){
        return new GLPIRequestHandler<AssistanceInterface, AssistanceInterface["ticket"], "getAnItem">(this.request, "ticket")
    }

    public get ticketRecurrent(){
        return new GLPIRequestHandler<AssistanceInterface, AssistanceInterface["ticketRecurrent"], "getAnItem">(this.request, "ticketRecurrent")
    }
}

type AssistanceInterface = InterfacesMap["AssistanceInterface"]
export default AssistanceService;