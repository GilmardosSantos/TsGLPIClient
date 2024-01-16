import axios from 'axios';
import { GLPIActives } from './actives/glpi-actives';
import { GLPIAdministration } from './administration/glpi-administration';
import { GLPIAssistance } from './assistance/glpi-assistance';
import { GLPIDropdown } from './dropdown/glpi-dropdown';
import { GLPIManagement } from './management/glpi-management';
import { GLPITools } from './tools/glpi-tools';
export class Requests {
    constructor(
        private auth: {
            session_token: string,
            glpi_url: string,
            app_token: string,
        }
        ){
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