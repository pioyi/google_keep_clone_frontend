import { createContext } from "react"

export interface TokenData {
    token: string;
    username: string;
    id: number;
    profileColor: string;
}

export interface IAuthContext {
    userData: TokenData | null;
    login: (data: TokenData) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
    userData: null,
    login: () => {},
    logout: () => {}
})