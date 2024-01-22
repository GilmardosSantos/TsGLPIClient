import { GLPIApiInterface } from "@interfaces/main";
import { Software } from "./actives/software.model";
import { Ticket } from "./assistance/ticket.model";
import { Contract } from "./management/contract.model";
import { Problem } from "./assistance/problem.model";
import { Change } from "./assistance/change.model";
import { Computer } from "./actives/computer.model";
import { type } from "os";
 
export type GLPIItemTypes =  "NetworkEquipmentParams" | "PeripheralParams" | "PhoneParams" | "PrinterParams"

export interface GLPIParamType 
extends Partial<Record<GLPIItemTypes, ComputerNetworkPeripheralPhonePrinterParams>> 
{
    ComputerParams?: ComputerParams;
    getAnItem?: GetAnItem;
    getAllItems?: GetAllItems;
}

export interface ComputerParams {
    with_disk?: boolean;
    with_softwares?: boolean;
    with_connections?: boolean;
}


export interface GetAnItem  {
    id?: string;
    expand_dropdowns?: boolean;
    get_hateoas?: boolean;
    get_sha1?: boolean;
    with_networkports?: boolean;
    with_infocoms?: boolean;
    with_contracts?: boolean;
    with_documents?: boolean;
    with_tickets?: boolean;
    with_problems?: boolean;
    with_changes?: boolean;
    with_notes?: boolean;
    with_logs?: boolean;
    add_keys_names?: string[];
}

export type WithTypes = {
    with_softwares: { _software: Software[]}
}

export interface GetAllItems {
    expand_dropdowns: boolean;
    get_hateoas: boolean
    only_id: boolean;
    range: string
    sort: number;
    order: "ASC" | "DESC"
    searchText: {[key: string]: string}
    is_deleted: boolean;
    add_keys_names: string;
    with_networkports: boolean;
}

export interface ComputerNetworkPeripheralPhonePrinterParams {
    with_devices?: boolean;
}



