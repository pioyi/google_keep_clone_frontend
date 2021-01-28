import React from 'react'
import { INote } from '../../../types'

import DeleteButton from './DeleteButton'
import FavouriteButton from './FavouriteButton'

interface NoteFooterProps {
    id: number;
    isFavourite: boolean;
    deleteOnFavourite?: boolean;
    setNotes: (data: any) => any;
}

const NoteFooter: React.FC<NoteFooterProps> = ({ id, isFavourite, deleteOnFavourite, setNotes }) => {
    const deleteNote = () => { 
        setNotes((notes: INote[]) => notes.filter(note => note.id !== id))
    } 

    return (
        <div className="note__footer">
            <FavouriteButton isFavourite={isFavourite} id={id} deleteNote={deleteOnFavourite ? deleteNote : false} />
            <DeleteButton id={id} deleteNote={deleteNote} />
        </div>
    )
}

export default NoteFooter
