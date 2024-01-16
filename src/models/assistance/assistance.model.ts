import { Change } from './change.model'
import { Planning } from './planning.model'
import { Problem } from './problem.model'
import { RecurrentChange } from './recurrentchange.model'
import { Stat } from './stat.model'
import { Ticket } from './ticket.model'
import { TicketRecurrent } from './ticketrecurrent.model'

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