import { SET_ADD,SET_ERROR, SET_SERCH } from "../action/Fetch"
import { ActionType, State } from "../type/Fetch"
export const initialState:State = {
    data: {
        info: undefined,
        results: [],
      },
    error:false,
    loading:true
}

export const fetchReducer = (state:State = initialState , { type, payload}:ActionType) => {
  switch (type) {

  case SET_ADD:
    console.log(`setAdd`);
    console.log(payload);
    return { ...state,loading:false , data:{info:payload.info,results:payload.results} }
    case SET_ERROR:
        return { ...state,loading:false,error:true  } //SET_SERCH
    // case SET_SERCH:
    //     return { ...state,loading:false,error:true,data: info:undefined  } //SET_SERCH
  default:
    return state
  }
}
