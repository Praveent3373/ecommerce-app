import { createContext, useContext, useEffect, useState } from "react";
import {useAuth0} from "@auth0/auth0-react"

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const {loginWithRedirect, logout, user} = useAuth0();
    const [myUser, SetmyUser] = useState(null);
    
    useEffect(() => {
        SetmyUser(user)
    },[user])
    // useEffect(() => {
    //     console.log(`user: ${user}`);
    //     console.log(`isAuthenticated: ${isAuthenticated}`);
    //     console.log(`isLoading: ${isLoading}`);
    // },[isAuthenticated])
    
    return <UserContext.Provider value={{
        loginWithRedirect, logout, myUser
    }}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => {
    return useContext(UserContext)
}