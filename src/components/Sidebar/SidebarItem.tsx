import React from 'react'
import { NavLink } from 'react-router-dom'

interface SidebarItemProps {
    text: string;
    to: string;
    isTargetBlank?: boolean;
    icon: React.ComponentType<any>;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ isTargetBlank, text, to, icon: IconComponent}) => {
    return !isTargetBlank ? (
        <NavLink exact to={to} className="sidebar__item" activeClassName="active">
            <IconComponent size={25} />
            <p className="sidebar__text">{ text }</p>
        </NavLink>
    ) : (
        <a className="sidebar__item" href={to} target="_blank" rel="noreferrer">
            <IconComponent size={25} />
            <p className="sidebar__text">{ text }</p>
        </a>
    )
}

export default SidebarItem
