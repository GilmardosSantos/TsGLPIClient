import { Links } from "src/types/types";


export interface CartridgeItemType {
    id: number;
    name: string;
    comment: string;
    date_mod: string;
    date_creation: string;
    links: Links;
}