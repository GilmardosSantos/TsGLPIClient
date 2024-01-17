import { ItilCategory } from "@models/controllers/dropdown/assistance/itilcategory.model";
import { ItilFollowupTemplate } from "@models/controllers/dropdown/assistance/itilfollowuptemplate.model";
import { PendingReason } from "@models/controllers/dropdown/assistance/pendingreason.model";
import { PlanningEventCategory } from "@models/controllers/dropdown/assistance/planningeventcategory.model";
import { PlanningExternalEventTemplate } from "@models/controllers/dropdown/assistance/planningexternaleventtemplate.model";
import { ProjectState } from "@models/controllers/dropdown/assistance/projectstate.model";
import { ProjectTaskTemplate } from "@models/controllers/dropdown/assistance/projecttasktemplate.model";
import { ProjectTaskType } from "@models/controllers/dropdown/assistance/projecttasktype.model";
import { ProjectType } from "@models/controllers/dropdown/assistance/projecttype.model";
import { RequestType } from "@models/controllers/dropdown/assistance/requesttype.model";
import { SolutionTemplate } from "@models/controllers/dropdown/assistance/solutiontemplate.model";
import { SolutionType } from "@models/controllers/dropdown/assistance/solutiontype.model";
import { TaskCategory } from "@models/controllers/dropdown/assistance/taskcategory.model";
import { TaskTemplate } from "@models/controllers/dropdown/assistance/tasktemplate.model";

export {
    ItilCategory,
    ItilFollowupTemplate,
    PendingReason,
    PlanningEventCategory,
    PlanningExternalEventTemplate,
    ProjectState,
    ProjectTaskTemplate,
    ProjectTaskType,
    ProjectType,
    RequestType,
    SolutionTemplate,
    SolutionType,
    TaskCategory,
    TaskTemplate,
}   

export type DropdownAssistanceMap = {
    ItilCategory: ItilCategory,
    ItilFollowupTemplate: ItilFollowupTemplate,
    PendingReason: PendingReason,
    PlanningEventCategory: PlanningEventCategory,
    PlanningExternalEventTemplate: PlanningExternalEventTemplate,
    ProjectState: ProjectState,
    ProjectTaskTemplate: ProjectTaskTemplate,
    ProjectTaskType: ProjectTaskType,
    ProjectType: ProjectType,
    RequestType: RequestType,
    SolutionTemplate: SolutionTemplate,
    SolutionType: SolutionType,
    TaskCategory: TaskCategory,
    TaskTemplate: TaskTemplate,
}