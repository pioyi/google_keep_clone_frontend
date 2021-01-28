import axios from 'axios'

import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { INote } from '../types'

interface useFetchReturn {
    data: INote[];
    setData: (data: INote[]) => void;
    loading: boolean;
}

function useFetch(url: string, initialValue: any = []): useFetchReturn {
    const { userData } = useContext(AuthContext)
    const [data, setData] = useState(initialValue)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url, {
            headers: {
                google_keep_clone_token: userData!.token
            }
        })
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => console.log(userData))
    }, [url, userData])

    return { data, setData, loading }
}

export default useFetch
