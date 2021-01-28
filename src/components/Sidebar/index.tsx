import React from 'react'

import "./Sidebar.css"
import SidebarItem from "./SidebarItem"

import {
    MdLightbulbOutline,
    MdFavoriteBorder,
    MdLanguage,
    MdStorage
} from "react-icons/md"

function Sidebar() {
    return (
        <div className="sidebar__container">
            <SidebarItem to="/" text="Notes" icon={MdLightbulbOutline} />
            <SidebarItem to="/favourites" text="Favourites" icon={MdFavoriteBorder} />
            <SidebarItem to="https://github.com/pioyi/google_keep_clone_frontend" isTargetBlank text="Frontend Repo" icon={MdLanguage} />
            <SidebarItem to="https://github.com/pioyi/google_keep_clone_backend" isTargetBlank text="Backend Repo" icon={MdStorage} />
        </div>
    )
}

export default Sidebar
