import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
    api: {
        app_token: process.env.app_token || '',
        glpi_url: process.env.glpi_url || ''
    },
    user_token:  process.env.user_token || '',
    user_credentials: {
        login: process.env.login || '',
        password: process.env.password || ''
    }
}