import { ActiveRequestsType } from "./actives/requests";
import { AdministrationRequestsType } from "./administration/requests";

export type RequestsType = ActiveRequestsType | AdministrationRequestsType


export interface REQUESTS {
    session_token: string;
    glpi_url: string;
    app_token: string;
}