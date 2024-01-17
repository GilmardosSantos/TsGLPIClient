import dotenv from 'dotenv';

dotenv.config();

export const environment = {
    dev: {
        app_token: process.env.app_token || '',
        user_token: process.env.user_token || '',
        glpi_url: process.env.glpi_url || ''
    }
}