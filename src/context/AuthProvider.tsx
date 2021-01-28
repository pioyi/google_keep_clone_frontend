import axios from "axios"
import React, { useState, useEffect } from "react"
import Spinner from "../components/Spinner"
import { AuthContext, TokenData } from "./AuthContext"

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<TokenData | null>(null)
    const [loading, setLoading ] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("google_keep_clone_token")

        if (token) {
            axios.get<TokenData>("/auth/parseToken", {
                headers: {
                    google_keep_clone_token: token
                }
            })
                .then(res => {
                    setUserData(res.data)
                })
                .catch(err => console.log(err.response))
        }
        setLoading(false)
    }, [])

    const login = (data: TokenData) => {
        localStorage.setItem("google_keep_clone_token", data.token)
        setUserData(data)
    }

    const logout = () => {
        localStorage.removeItem("google_keep_clone_token")
        setUserData(null)
    }

    return !loading ? (
        <AuthContext.Provider value={{ userData, logout, login }}>
            { children }
        </AuthContext.Provider>
    ) : <Spinner marginTop={50} />
}