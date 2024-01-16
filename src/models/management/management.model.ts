import { Appliance } from "./appliance.model";
import { Budget } from "./budget.model";
import { Certificate } from "./certificate.model";
import { Cluster } from "./cluster.model";
import { Contact } from "./contact.model";
import { Contract } from "./contract.model";
import { Database } from "./database.model";
import { Datacenter } from "./datacenter.model";
import { Document } from "./document.model";
import { Domain } from "./domain.model";
import { Line } from './line.model';
import { SoftwareLicense } from "./softwarelicense.model";

export {
    Appliance,
    Budget,
    Certificate,
    Cluster,
    Contact,
    Contract,
    Database,
    Datacenter,
    Document,
    Domain,
    Line,
    SoftwareLicense,
};

export type ManagementTypesMap = {
    Appliance: Appliance;
    Budget: Budget;
    Certificate: Certificate;
    Cluster: Cluster;
    Contact: Contact;
    Contract: Contract;
    Database: Database;
    Datacenter: Datacenter;
    Document: Document;
    Domain: Domain;
    Line: Line;
    SoftwareLicense: SoftwareLicense;
}