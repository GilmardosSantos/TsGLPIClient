import { GLPIRequestHandler } from "../../handlers/glpi-request-handler";
import { InterfacesMap } from "../../interfaces/interfaces.module";
import { GLPIAuthenticationResponse } from "../../interfaces/services/authentication.model";


class ToolsService {
    constructor(private request: GLPIAuthenticationResponse){
        this.request = { ...request };
    }

    public get knowbaseItem(){
        return new GLPIRequestHandler<ToolsInterface, ToolsInterface["knowbaseItem"], "getAnItem">(this.request, "knowbaseItem")
    }

    public get project(){
        return new GLPIRequestHandler<ToolsInterface, ToolsInterface["project"], "getAnItem">(this.request, "project")
    }

    public get reminder(){
        return new GLPIRequestHandler<ToolsInterface, ToolsInterface["reminder"], "getAnItem">(this.request, "reminder")
    }

    public get report(){
        return new GLPIRequestHandler<ToolsInterface, ToolsInterface["report"], "getAnItem">(this.request, "report")
    }

    public get reservationItem(){
        return new GLPIRequestHandler<ToolsInterface, ToolsInterface["reservationItem"], "getAnItem">(this.request, "reservationItem")
    }

    public get RSSFeed(){
        return new GLPIRequestHandler<ToolsInterface, ToolsInterface["RSSFeed"], "getAnItem">(this.request, "RSSFeed")
    }

    public get savedSearch(){
        return new GLPIRequestHandler<ToolsInterface, ToolsInterface["savedSearch"], "getAnItem">(this.request, "savedSearch")
    }
}

type ToolsInterface = InterfacesMap["ToolsInterface"]
export default ToolsService;