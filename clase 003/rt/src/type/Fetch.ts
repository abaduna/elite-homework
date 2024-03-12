export interface State {
    data: data; 
    error: boolean;
    loading: boolean;
  }


 export type ActionType = {
    type: string;
    payload?: data; 
  };
  export interface data {
    info?:info
    results?:Character[]
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