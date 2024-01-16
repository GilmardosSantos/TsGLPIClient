import { KnowbaseItem } from "./knowbaseitem.model";
import { Project } from "./project.model";
import { Reminder } from "./reminder.model";
import { Report } from "./report.model";
import { ReservationItem } from "./reservationitem.model";
import { RSSFeed } from "./rssfeed.model";
import { SavedSearch } from "./savedsearch.model";

export {
    KnowbaseItem,
    Project,
    RSSFeed,
    Reminder,
    Report,
    ReservationItem,
    SavedSearch
}

export type ToolsTypesMap = {
    KnowbaseItem: KnowbaseItem;
    Project: Project;
    RSSFeed: RSSFeed;
    Reminder: Reminder;
    Report: Report;
    ReservationItem: ReservationItem;
    SavedSearch: SavedSearch;
}