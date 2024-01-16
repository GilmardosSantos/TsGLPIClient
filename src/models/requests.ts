import { ActiveRequestsType } from "./actives/requests";
import { AdministrationRequestsType } from "./administration/requests";
import { AssistanceRequestsType } from "./assistance/requests";
import { CommonRequestsType } from "./dropdown/common/requests";
import { DropdownRequestsType } from "./dropdown/requests";
import { ManagementRequestsType } from "./management/requests";
import { ToolsRequestsType } from "./tools/requests";

export type RequestsType = 
ActiveRequestsType |
AdministrationRequestsType |
AssistanceRequestsType |
DropdownRequestsType |
ManagementRequestsType |
ToolsRequestsType


export type REQUESTS = {
    session_token: string;
    glpi_url: string;
    app_token: string;
}


