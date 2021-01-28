import React from 'react';
import NoteContainer from '../components/NoteContainer';

function Favourites() {
    return (
        <NoteContainer url="/users/current/notes/favourites" deleteOnFavourite={true} />
    )
}

export default Favourites
