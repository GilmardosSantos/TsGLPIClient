import { GLPIApiInterface } from "@interfaces/main";

export type GLPIApiAuthenticationType = {
    user_token?: string;
    user_credentials?: {
        login: string;
        password: string;
    }
}


export interface GLPIAuthenticationResponse extends GLPIApiInterface{
    session_token: string;
}
