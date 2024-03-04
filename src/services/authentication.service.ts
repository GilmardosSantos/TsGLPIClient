import { GLPIApiInterface } from "../interfaces/main";
import {
  GLPIApiAuthenticationType,
  GLPIAuthenticationResponse,
} from "../interfaces/services/authentication.model";
import WebRequest from "../utils/web-request";
import RequestService from "./requests.service";

export class GLPIApiAuthenticationService {
  private webRequest = new WebRequest();
  constructor(private glpiApi: GLPIApiInterface) {
    this.glpiApi = { ...glpiApi };
  }

  public async withUserToken(token: GLPIApiAuthenticationType["user_token"]) {
    return this.webRequest
      .create(this.glpiApi.glpi_url, {
        headers: {
          "App-Token": this.glpiApi.app_token,
          Authorization: `user_token ${token}`,
        },
      })
      .get<GLPIAuthenticationResponse>("initSession")
      .then((response) => {
        response.data = { ...response.data, ...this.glpiApi };
        return new RequestService(response.data);
      });
  }

  public async withUserCredential(login: string, password: string) {
    console.table([login, password]);
    return this.webRequest
      .create(this.glpiApi.glpi_url, {
        headers: {
          "App-Token": this.glpiApi.app_token,
          Authorization: `Basic ${btoa(`${login}:${password}`)}`,
        },
      })
      .get<GLPIAuthenticationResponse>("initSession")
      .then((response) => {
        response.data = { ...response.data, ...this.glpiApi };
        return new RequestService(response.data);
      });
  }
}
