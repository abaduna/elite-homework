export interface State {
    data: unknown; 
    error: boolean;
    loading: boolean;
  }
  export const initialState: State = {
    data: {},
    error: false,
    loading: true,
  };

 export type ActionType = {
    type: string;
    payload?: unknown; 
  };
  export interface data {
    info:info
    result:Character[]
  }
  export interface info {
    count:string
    pages:number
    next:string
    prev:string
    
}

interface Character {
    id:number
    name:string,
    status:string
    species:string
    type:string|null
    gender:String
    origin:origin
}

interface origin {
    name:string
    url:string
}