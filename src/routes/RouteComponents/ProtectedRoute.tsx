import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


function ProtectedRoute({ component: Component, ...rest }: any) {
    const { userData } = useContext(AuthContext)

    return (
        <Route {...rest}
            render={props => 
                userData ? <Component {...props} /> : 
                <Redirect to="/signup" />
            }
        />
    )
}

export default ProtectedRoute