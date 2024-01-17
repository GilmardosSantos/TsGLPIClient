import { Dictionnary } from "@models/controllers/administration/dictionnary.model";
import { Entity } from "@models/controllers/administration/entity.model";
import { Event } from "@models/controllers/administration/event.model";
import { Group } from "@models/controllers/administration/group.model";
import { Profile } from "@models/controllers/administration/profile.model";
import { QueuedNotification } from "@models/controllers/administration/queuednotification.model";
import { Rule } from "@models/controllers/administration/rule.model";
import { User } from "@models/controllers/administration/user.model";

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