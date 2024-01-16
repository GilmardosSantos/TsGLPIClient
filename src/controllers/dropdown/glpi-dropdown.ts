import { REQUESTS } from "../../models/requests";
import { GLPIDropdownAssistance } from "./assistance/glpi-dropdown-assistance";
import { GLPIDropdownCommon } from "./common/glpi-dropdown-common";
import { GLPIDropdownTypes } from "./types/glpi-dropdown-types";

export class GLPIDropdown {
    constructor(private auth: REQUESTS){
        this.auth = { ...auth };
    }

    get Common(){
        return new GLPIDropdownCommon(this.auth);
    }

    get Assistance(){
        return new GLPIDropdownAssistance(this.auth);
    }

    get Types(){
        return new GLPIDropdownTypes(this.auth);
    }

}