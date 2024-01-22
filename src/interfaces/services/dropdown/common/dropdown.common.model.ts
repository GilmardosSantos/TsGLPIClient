import { Blacklist } from "./blacklist.model";
import { BlacklistedMailContent } from "./blacklistedmailcontent.model";
import { Location } from "./location.model";
import { Manufacturer } from "./manufacturer.model";
import { State } from "./state.model";

export {
    Blacklist,
    BlacklistedMailContent,
    Location,
    Manufacturer,
    State
};

export type DropdownCommonMap = {
     Blacklist: Blacklist;
     BlacklistedMailContent: BlacklistedMailContent;
     Location: Location;
     Manufacturer: Manufacturer;
     State: State;
}