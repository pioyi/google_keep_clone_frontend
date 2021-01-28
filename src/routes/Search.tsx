import React from 'react';

import { useParams } from 'react-router-dom';
import NoteContainer from '../components/NoteContainer';

function Search() {
    const { searchQuery } = useParams<{ searchQuery: string }>()

    return (
        <NoteContainer url={`/users/current/notes/search/${searchQuery}`} />
    )
}

export default Search
