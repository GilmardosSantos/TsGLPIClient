interface ActiveErrorHandle<ActiveType> extends Error{
    active_type: ActiveType;
    err: unknown;
    id?: string | number;
    name: string;
}

interface ActiveErrorRequired<ActiveType>{
    active_type: ActiveType;
    err: unknown;
    id?: string | number;
}

export class GLPIGetErrorHandler<ActiveType> implements ActiveErrorHandle<ActiveType>{

    active_type!: ActiveType;
    err!: unknown;
    id!: string | number;
    isList!: boolean;
    message!: string;
    name!: string;

    constructor({active_type, err, id} : ActiveErrorRequired<ActiveType>){
        this.active_type = active_type;
        this.name = `GET_ACTIVE_${active_type}_ERROR`;
        this.err = err;
        if (id) {
            this.id = id;
            this.isList = false;
            this.message = `Was not possible retrieve the ${active_type} at id: ${id}`;
            return;
        }
        this.isList = true;
        this.message = `Was not possible retrieve the ${active_type} list`;
    }
}