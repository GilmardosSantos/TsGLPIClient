import { GLPIRequestHandler } from "../../handlers/glpi-request-handler";
import { InterfacesMap } from "../../interfaces/interfaces.module";
import { GLPIAuthenticationResponse } from "../../interfaces/services/authentication.model";

class ManagementService {
    constructor(private request: GLPIAuthenticationResponse){
        this.request = { ...request };
    }

    public get appliance(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["appliance"], "getAnItem">(this.request, "appliance")
    }

    public get budget(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["budget"], "getAnItem">(this.request, "budget")
    }

    public get certficate(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["certificate"], "getAnItem">(this.request, "certificate")
    }
    public get cluster(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["cluster"], "getAnItem">(this.request, "cluster")
    }

    public get contact(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["contact"], "getAnItem">(this.request, "contact")
    }

    public get contract(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["contract"], "getAnItem">(this.request, "contract")
    }

    public get database(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["database"], "getAnItem">(this.request, "database")
    }

    public get datacenter(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["datacenter"], "getAnItem">(this.request, "datacenter")
    }

    public get document(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["document"], "getAnItem">(this.request, "document")
    }

    public get domain(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["domain"], "getAnItem">(this.request, "domain")
    }

    public get line(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["line"], "getAnItem">(this.request, "line")
    }

    public get softwareLicense(){
        return new GLPIRequestHandler<ManagementInterface, ManagementInterface["softwareLicense"], "getAnItem">(this.request, "softwareLicense")
    }
}

type ManagementInterface = InterfacesMap["ManagementInterface"]
export default ManagementService;