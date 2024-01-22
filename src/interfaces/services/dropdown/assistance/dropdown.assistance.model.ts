import { ItilCategory } from "./itilcategory.model";
import { ItilFollowupTemplate } from "./itilfollowuptemplate.model";
import { PendingReason } from "./pendingreason.model";
import { PlanningEventCategory } from "./planningeventcategory.model";
import { PlanningExternalEventTemplate } from "./planningexternaleventtemplate.model";
import { ProjectState } from "./projectstate.model";
import { ProjectTaskTemplate } from "./projecttasktemplate.model";
import { ProjectTaskType } from "./projecttasktype.model";
import { ProjectType } from "./projecttype.model";
import { RequestType } from "./requesttype.model";
import { SolutionTemplate } from "./solutiontemplate.model";
import { SolutionType } from "./solutiontype.model";
import { TaskCategory } from "./taskcategory.model";
import { TaskTemplate } from "./tasktemplate.model";

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