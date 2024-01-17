import { Blacklist } from "@models/controllers/dropdown/common/blacklist.model";
import { BlacklistedMailContent } from "@models/controllers/dropdown/common/blacklistedmailcontent.model";
import { Location } from "@models/controllers/dropdown/common/location.model";
import { Manufacturer } from "@models/controllers/dropdown/common/manufacturer.model";
import { State } from "@models/controllers/dropdown/common/state.model";

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