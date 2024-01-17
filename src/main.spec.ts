import  { GLPIClient } from './main';
import type { GLPIClientInterface } from './models/main';
import { GLPIRequests } from './controllers/glpi-requests';

jest.mock('axios');

describe('GlpiClient',() => {
    it('Succefully login at GLPI', async() => {
        const glpi = new GLPIClient({} as GLPIClientInterface)
        const client = await glpi.authenticateWithUserToken()      
        expect(client).toBeInstanceOf(GLPIRequests)
    })
})