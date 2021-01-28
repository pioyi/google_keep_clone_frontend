import React from 'react'
import "./Avatar.css"

interface AvatarProps {
    username: string;
    profileColor: string;
}

const Avatar: React.FC<AvatarProps> = ({ username, profileColor }) => {
    return (
        <div className="avatar__container" style={{ backgroundColor: profileColor }}>
            <p>{ username[0] }</p>
        </div>
    )
}

export default Avatar