export type RequestsType = 
"Appliance" | 
"Budget" | 
"Cable" | //Active 
"CartridgeItem" | //Active
"Certificate" |
"Cluster" | 
"Computer" | //Active
"ConsumableItem" | //Active 
"Contact" | 
"Contract" | 
"Database" | 
"DataCenter" | 
"Devices" | //Active
"Dictionnary" | 
"Document" | 
"Domain" |
"Enclosure" | //Active
"Entity" |
"Event" |
"Group" | 
"Item_Device" | //Active
"KnowbaseItem" | 
"Line" |
"Monitor" |
"NetworkEquipament" |
"PassivedCEquipament" | //Active
"Pdu" | //Active
"Periphal" | 
"Phone" | //Active
"Printer" | //Active
"Profile" | 
"Project" | 
"Rack" | //Active
"Reminder" | 
"ReservationItem" | 
"Report" | 
"RssFeed" | 
"Rule" |
"SavedSearch" | 
"Software" | //Active
"SoftwareLicense" | 
"Supplier" | 
"Unmanaged" | //Active
"User" |
"QueuedNotification" | 
""

export interface REQUESTS {
    session_token: string;
    glpi_url: string;
    app_token: string;
}