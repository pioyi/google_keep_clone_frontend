import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"

interface FavouriteButtonProps {
    id: number;
    isFavourite: boolean;
    deleteNote: (() => void) | false;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ id, isFavourite, deleteNote}) => {
    const { userData } = useContext(AuthContext)
    const [isNoteFavourite, setIsNoteFavourite] = useState(isFavourite)

    const favouriteNote = () => {
        setIsNoteFavourite(!isNoteFavourite)
        if (deleteNote) deleteNote()

        axios.put(`/users/current/notes/${id}/favourite`, null, {
            headers: {
                google_keep_clone_token: userData!.token
            }
        })
            .catch(err => console.log(err.response))
    }

    return (
        <div className="note__footer__item">
            {isNoteFavourite ? (
                <MdFavorite className="heart" onClick={favouriteNote} />
            ) : (
                <MdFavoriteBorder onClick={favouriteNote} />
            )}
        </div>
    )
}

export default FavouriteButton
