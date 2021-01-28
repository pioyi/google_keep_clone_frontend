import React, { useContext, useState } from 'react'
import "./Header.css"

import { 
    MdAddCircle, 
    MdExitToApp 
} from "react-icons/md"
import { VscGithub } from "react-icons/vsc"


import Avatar from '../Avatar'
import SearchBar from '../SearchBar'
import CreateNoteModal from "../CreateNoteModal"
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { INote } from '../../types'

interface HeaderProps {
    setNotes?: (data: INote[]) => void;
}

const Header: React.FC<HeaderProps> = ({ setNotes }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { userData, logout } = useContext(AuthContext)
    const history = useHistory()

    const logoutUser = () => {
        logout()
        history.push("/login")
    }

    return (
        <header>
            <h1 className="brand">Note Taker</h1>
            <SearchBar />
            <ul className="navbar__links">
                <a href="https://github.com/pioyi/google_keep_clone_frontend" target="_blank" rel="noreferrer">
                    <VscGithub className="github" />
                </a>
                {setNotes && (
                    <>
                    <MdAddCircle  onClick={() => setIsModalOpen(!isModalOpen)} />
                    <CreateNoteModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} setNotes={setNotes} />
                    </>
                )}
                <MdExitToApp onClick={logoutUser} />
                <Avatar username={userData!.username} profileColor={userData!.profileColor} />
            </ul>
        </header>
    )
}

export default Header
