import { TokenData } from "../context/AuthContext";
import axios from "axios"

export default async function parseToken(
    setLoading: (value: React.SetStateAction<boolean>) => void,
    setUserData: (value: React.SetStateAction<TokenData | null>) => void
) {
    const token = localStorage.getItem("google_keep_clone_token")
    if (!token) return setLoading(false)

    try {
        const res = await axios.get<TokenData>("/auth/parseToken", {
            headers: {
                google_keep_clone_token: token
            }
        })

        setUserData(res.data)
    } catch(err) {
        console.log(err.response)
    }

    setLoading(false)
}