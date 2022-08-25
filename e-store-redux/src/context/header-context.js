import { createContext, useContext, useReducer } from "react"
import {SIDEBAR_OPEN, SIDEBAR_CLOSE} from "./actions";
import headerReducer from "./header-reducer";

const initialState = {
    isSidebarOpen : false,
}

const HeaderContext = createContext();

export const HeaderProvider = ({children}) => {
    const [state, dispatch] = useReducer(headerReducer, initialState);

    const openSidebar = () => {
        dispatch({type: SIDEBAR_OPEN});
    }
    const closeSidebar = () => {
        dispatch({type: SIDEBAR_CLOSE});
    }
    
    return <HeaderContext.Provider value={{
        ...state, openSidebar, closeSidebar
    }}>
        {children}
    </HeaderContext.Provider>
}

export const useHeaderContext = () => {
    return useContext(HeaderContext)
}