import { RequestsType } from "../models/requests";

interface ActiveErrorHandle {
    item_id: string;
    isList: boolean;
    active_type: RequestsType;
    message: string
}

export function GLPIGetActiveErrorHandle(active_type: RequestsType, item_id?: string): ActiveErrorHandle{
    if (item_id){
        return {
            isList: false,
            active_type: active_type,
            item_id: item_id,
            message: `Was not possible retrieve the ${active_type} at id: ${item_id}`
        }
    }
    return {
        item_id: '',
        isList: true,
        active_type: active_type,
        message: `Was not possible retrieve the ${active_type} list`
    }
}