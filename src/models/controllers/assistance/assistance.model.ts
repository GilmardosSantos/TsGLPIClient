import { Change } from '@models/controllers/assistance/change.model'
import { Planning } from '@models/controllers/assistance/planning.model'
import { Problem } from '@models/controllers/assistance/problem.model'
import { RecurrentChange } from '@models/controllers/assistance/recurrentchange.model'
import { Stat } from '@models/controllers/assistance/stat.model'
import { Ticket } from '@models/controllers/assistance/ticket.model'
import { TicketRecurrent } from '@models/controllers/assistance/ticketrecurrent.model'

export {
    Change,
    Planning,
    Problem,
    RecurrentChange,
    Stat,
    Ticket,
    TicketRecurrent
};

export type AssistanceRequestsMap = {
    "Change": Change,
    "PlanningExternalEvent": Planning,
    "Problem": Problem,
    "RecurrentChange": RecurrentChange,
    "Stat": Stat,
    "Ticket": Ticket,
    "TicketRecurrent": TicketRecurrent,
}