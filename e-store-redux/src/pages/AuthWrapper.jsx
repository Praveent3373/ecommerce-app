import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const AuthWrapper = ({children}) => {
    const {isLoading, error} = useAuth0;
    if(isLoading){
        return <div className="auth-wrapper">
            <h1>Loading</h1>
        </div>
    }
    if(error){
        return <div className='auth-wrapper'>
            <h1>{error.message}</h1>
        </div>
    }
    return (
        <div>{children}</div>
    )
}

export default AuthWrapper