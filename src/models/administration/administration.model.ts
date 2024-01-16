import { Dictionnary } from "./dictionnary.model";
import { Entity } from "./entity.model";
import { Event } from "./event.model";
import { Group } from "./group.model";
import { Profile } from "./profile.model";
import { QueuedNotification } from "./queuednotification.model";
import { Rule } from "./rule.model";
import { User } from "./user.model";

export {
    Dictionnary,
    Entity,
    Event,
    Group,
    Profile,
    QueuedNotification,
    Rule,
    User
};

export type AdministrationRequestsMap = {
    "Dictionnary" : Dictionnary, 
    "Entity" : Entity,
    "Event" : Event,
    "Group" : Group,
    'Profile' : Profile,
    'QueuedNotification' : QueuedNotification,
    'Rule' : Rule,
    'User': User
};