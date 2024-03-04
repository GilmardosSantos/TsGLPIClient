import { GLPIRequestHandler } from "../../handlers/glpi-request-handler";
import { GLPIAuthenticationResponse } from "../../interfaces/services/authentication.model";
import { InterfacesMap } from "../../interfaces/interfaces.module";

class AdministrationService {
  constructor(private request: GLPIAuthenticationResponse) {
    this.request = { ...request };
  }

  public get dictionnary() {
    return {
      software: new GLPIRequestHandler<
        DictionnaryInterface,
        DictionnaryInterface["RuleDictionnarySoftware"],
        "getAnItem"
      >(this.request, "RuleDictionnarySoftware"),
      printer: new GLPIRequestHandler<
        DictionnaryInterface,
        DictionnaryInterface["RuleDictionnaryPrinter"],
        "getAnItem"
      >(this.request, "RuleDictionnaryPrinter"),
      manufacturer: new GLPIRequestHandler<
        DictionnaryInterface,
        DictionnaryInterface["RuleDictionnaryManufacturer"],
        "getAnItem"
      >(this.request, "RuleDictionnaryManufacturer"),
    };
  }

  public get entity() {
    return new GLPIRequestHandler<
      AdministrationInterface,
      AdministrationInterface["entity"],
      "getAnItem"
    >(this.request, "entity");
  }

  public get event() {
    return new GLPIRequestHandler<
      AdministrationInterface,
      AdministrationInterface["event"],
      "getAnItem"
    >(this.request, "event");
  }

  public get group() {
    return new GLPIRequestHandler<
      AdministrationInterface,
      AdministrationInterface["group"],
      "getAnItem"
    >(this.request, "group");
  }

  public get profile() {
    return new GLPIRequestHandler<
      AdministrationInterface,
      AdministrationInterface["profile"],
      "getAnItem"
    >(this.request, "profile");
  }

  public get queuednotification() {
    return new GLPIRequestHandler<
      AdministrationInterface,
      AdministrationInterface["queuedNotification"],
      "getAnItem"
    >(this.request, "queuedNotification");
  }

  public get rule() {
    return new GLPIRequestHandler<
      AdministrationInterface,
      AdministrationInterface["rule"],
      "getAnItem"
    >(this.request, "rule");
  }

  public get user() {
    return new GLPIRequestHandler<
      AdministrationInterface,
      AdministrationInterface["user"],
      "getAnItem"
    >(this.request, "user");
  }
}

type AdministrationInterface = InterfacesMap["AdministrationInterface"];
type DictionnaryInterface =
  InterfacesMap["AdministrationInterface"]["dictionnary"];
export default AdministrationService;
