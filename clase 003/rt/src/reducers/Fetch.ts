import { SET_ADD,SET_ERROR } from "../action/Fetch"
import { ActionType, State } from "../type/Fetch"
export const initialState:State = {
    data:{},
    error:false,
    loading:true
}

export const fetchReducer = (state:State = initialState, { type, payload}:ActionType) => {
  switch (type) {

  case SET_ADD:
    return { ...state,loading:false , data:payload }
    case SET_ERROR:
        return { ...state,loading:false,error:true  }
  default:
    return state
  }
}
