import { Cable } from '@interfaces/services/actives/cable.model'
import { CartridgeItem } from '@interfaces/services/actives/cartridgeitem.model'
import { Computer } from '@interfaces/services/actives/computer.model'
import { ConsumableItem } from '@interfaces/services/actives/consumableitem.model'
import { Enclosure } from '@interfaces/services/actives/enclosure.model'
import { Item_Device } from '@interfaces/services/actives/item_device.model'
import { Monitor } from '@interfaces/services/actives/monitor.model'
import { NetworkEquipment } from '@interfaces/services/actives/networkequipment.model'
import { PassivedCEquipament } from '@interfaces/services/actives/passivedcequipment.model'
import { PDU } from '@interfaces/services/actives/pdu.model'
import { Peripheral } from '@interfaces/services/actives/peripheral.model'
import { Phone } from '@interfaces/services/actives/phone.model'
import { Printer } from '@interfaces/services/actives/printer.model'
import { Rack } from '@interfaces/services/actives/rack.model'
import { Software } from '@interfaces/services/actives/software.model'
import { Unmanaged } from '@interfaces/services/actives/unmanaged.model'
import { Dictionnary } from './services/administration/dictionnary.model'
import { Entity } from './services/administration/entity.model'
import { Group } from './services/administration/group.model'
import { Profile } from './services/administration/profile.model'
import { QueuedNotification } from './services/administration/queuednotification.model'
import { Rule } from './services/administration/rule.model'
import { User } from './services/administration/user.model'
import { Change } from './services/assistance/change.model'
import { Planning } from './services/assistance/planning.model'
import { Problem } from './services/assistance/problem.model'
import { RecurrentChange } from './services/assistance/recurrentchange.model'
import { Stat } from './services/assistance/stat.model'
import { Ticket } from './services/assistance/ticket.model'
import { TicketRecurrent } from './services/assistance/ticketrecurrent.model'
import { Appliance } from './services/management/appliance.model'
import { Budget } from './services/management/budget.model'
import { CertificateType } from './services/dropdown/types/certificatetype.model'
import { Cluster } from './services/management/cluster.model'
import { Contact } from './services/management/contact.model'
import { Contract } from './services/management/contract.model'
import { Database } from './services/management/database.model'
import { Datacenter } from './services/management/datacenter.model'
import { Document } from './services/management/document.model'
import { Domain } from './services/management/domain.model'
import { Line } from './services/management/line.model'
import { SoftwareLicense } from './services/management/softwarelicense.model'
import { KnowbaseItem } from './services/tools/knowbaseitem.model'
import { Project } from './services/tools/project.model'
import { RSSFeed } from './services/tools/rssfeed.model'
import { Reminder } from './services/tools/reminder.model'
import { ReservationItem } from './services/tools/reservationitem.model'
import { SavedSearch } from './services/tools/savedsearch.model'
import { RuleDictionnarySoftware } from './services/administration/dictionarries/ruledictionnarysoftware.model'
import { RuleDictionnaryManufacturer } from './services/administration/dictionarries/ruledictionnarymanufacturer.model'
import { RuleDictionnaryPrinter } from './services/administration/dictionarries/ruledictionnaryprinter.model'
import { Report } from './services/tools/report.model'

export type InterfacesMap = {
    ActivesInterface: {
        cable: Cable;
        cartridgeitem: CartridgeItem;
        computer: Computer;
        ConsumableItem: ConsumableItem;
        enclosure: Enclosure;
        Item_DeviceSimcard: Item_Device;
        monitor: Monitor;
        networkequipment: NetworkEquipment
        PassiveDCEquipment: PassivedCEquipament
        pdu: PDU
        peripheral: Peripheral
        phone: Phone
        printer: Printer
        rack: Rack
        software: Software
        unmanaged: Unmanaged
    };
    AdministrationInterface: {
        dictionnary: {
            RuleDictionnarySoftware: RuleDictionnarySoftware;
            RuleDictionnaryManufacturer: RuleDictionnaryManufacturer;
            RuleDictionnaryPrinter: RuleDictionnaryPrinter;
        };
        entity : Entity,
        event : Event,
        group : Group,
        profile : Profile,
        queuedNotification : QueuedNotification,
        rule : Rule,
        user: User,
    };
    AssistanceInterface: {
        change: Change,
        planningExternalEvent: Planning,
        problem: Problem,
        recurrentChange: RecurrentChange,
        stat: Stat,
        ticket: Ticket,
        ticketRecurrent: TicketRecurrent,
    },
    DropdownInterface: {}
    ManagementInterface: {
        appliance: Appliance;
        budget: Budget;
        certificate: CertificateType;
        cluster: Cluster;
        contact: Contact;
        contract: Contract;
        database: Database;
        datacenter: Datacenter;
        document: Document;
        domain: Domain;
        line: Line;
        softwareLicense: SoftwareLicense;
    }
    ToolsInterface: {
        knowbaseItem: KnowbaseItem;
        project: Project;
        RSSFeed: RSSFeed;
        reminder: Reminder;
        report: Report;
        reservationItem: ReservationItem;
        savedSearch: SavedSearch;
    }
}