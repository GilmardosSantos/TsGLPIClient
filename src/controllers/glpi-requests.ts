import { GLPIActives } from '@controllers/actives/glpi-actives';
import { GLPIAdministration } from '@controllers/administration/glpi-administration';
import { GLPIAssistance } from '@controllers/assistance/glpi-assistance';
import { GLPIDropdown } from '@controllers/dropdown/glpi-dropdown';
import { GLPIManagement } from '@controllers/management/glpi-management';
import { GLPITools } from '@controllers/tools/glpi-tools';
import { REQUESTS } from '@models/requests';
export class GLPIRequests {
    constructor(private auth: REQUESTS){
        this.auth = { ...auth };
    }

    public get Actives() {
        return new GLPIActives(this.auth);
    }

    public get Administration(){
        return new GLPIAdministration(this.auth);
    }

    public get Assistance() {
        return new GLPIAssistance(this.auth);
    }

    public get Dropdown() {
        return new GLPIDropdown(this.auth);
    }

    public get Management(){
        return new GLPIManagement(this.auth);
    }

    public Tools(){
        return new GLPITools(this.auth);
    }
}