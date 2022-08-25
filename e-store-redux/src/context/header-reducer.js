import {SIDEBAR_OPEN, SIDEBAR_CLOSE} from "./actions";

const headerReducer = (state, action) => {
    if(action.type === SIDEBAR_OPEN){
        return {...state, isSidebarOpen: true}
    }
    if(action.type === SIDEBAR_CLOSE){
        return {...state, isSidebarOpen: false}
    }
    throw new Error(`No Matching ${action.type} action type` )
}

export default headerReducer;