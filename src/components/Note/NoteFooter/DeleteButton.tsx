import axios from 'axios'
import React, { useContext } from 'react'
import { MdNotInterested } from "react-icons/md"
import { AuthContext } from '../../../context/AuthContext'

interface DeleteButtonProps {
    id: number;
    deleteNote: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, deleteNote}) => {
    const { userData } = useContext(AuthContext)

    const removeNote = () => {
        axios.delete(`/users/current/notes/${id}`, {
            headers: {
                google_keep_clone_token: userData!.token
            }
        })
            .then(deleteNote)
    }

    return (
        <div className="note__footer__item">
            <MdNotInterested onClick={removeNote} />
        </div>
    )
}

export default DeleteButton
