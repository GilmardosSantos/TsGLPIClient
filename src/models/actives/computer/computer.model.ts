import { Entity } from "../../administration/entity.model";
import { Group } from "../../administration/group.model";
import { User } from "../../administration/user.model";
import { Links, truefalse } from "../../glpi/glpi";
import { Manufacturer } from "../../glpi/manufacturer.model";
import { State } from "../../glpi/state.model";

export interface Computer{
    autoupdatesystem_id: truefalse;
    coment?: null;
    computermodel?: ComputerModel;
    computermodels_id:number;
    computertypes_id:number;
    ComputerType:ComputerType;
    contact:string;
    contact_num:string;
    date_creation:string;
    date_mod:string;
    entities_id:number;
    Entity?:Entity;
    groups_id:number;
    Group?:Group;
    groups_id_tech:number;
    id:number;
    is_deleted: truefalse;
    is_dynamic: truefalse;
    is_recursive: truefalse;
    is_template: truefalse;
    last_boot:string;
    last_inventory_update:string;
    links:Links;
    locations_id:number;
    Location:Location;
    manufacturers_id:number;
    Manufacturer?:Manufacturer;
    name:string;
    networks_id:number;
    otherserial:string;
    serial:string;
    states_id:number;
    State:State;
    template_name:null;
    ticket_tco:string;
    users_id:number
    User?:User;
    users_id_tech:number;
    uuid:string;
}

export interface ComputerModel{
    comment:string;
    date_creation:string;
    date_mod:string;
    depth:number;
    id:number;
    is_half_rack:number;
    name:string;
    picture_front?:null;
    picture_rear?:null;
    pictures?:null;
    power_connections:number;
    power_consumption:number;
    product_number:null;
    required_units:number;
    weight:number
}

export interface ComputerType{

}