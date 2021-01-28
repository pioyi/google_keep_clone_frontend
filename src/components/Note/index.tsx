import React from 'react'
import { INote } from '../../types'
import "./Note.css"
import NoteFooter from './NoteFooter'

interface NoteProps {
    note: INote;
    deleteOnFavourite?: boolean;
    setNotes: (notes: INote[]) => void;
}

const Note: React.FC<NoteProps> = ({ note: { id, title, content, isFavourite }, deleteOnFavourite, setNotes }) => {
    return (
        <div className="note__container">
            <div className="note__body">
                <h3 className="note__title">{ title }</h3>
                <p className="note__content">{ content }</p>
            </div>
            <NoteFooter 
                setNotes={setNotes} 
                isFavourite={isFavourite}
                deleteOnFavourite={deleteOnFavourite}
                id={id} 
            />
        </div>
    )
}

export default Note
