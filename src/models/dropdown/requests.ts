import { DropdownAssistanceRequestsType } from "./assistance/requests";
import { DropdownCommonRequestsType } from "./common/requests";

export type DropdownRequestsType = 
DropdownCommonRequestsType | 
DropdownAssistanceRequestsType 
