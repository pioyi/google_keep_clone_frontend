import React from 'react';
import NoteContainer from '../components/NoteContainer';

function Home() {
    return (
        <NoteContainer url="/users/current/notes" withModal={true} />
    )
}

export default Home
