import React from 'react';

import Layout from '../PageLayout';
import Note from '../Note';
import Spinner from '../Spinner';
import useFetch from '../../hooks/useFetch';
import NoResults from './NoResults';

interface NoteContainerProps {
    url: string;
    deleteOnFavourite?: boolean;
    withModal?: boolean;
}

const NoteContainer: React.FC<NoteContainerProps> = ({ url, withModal, deleteOnFavourite }) => {
    const { data, loading, setData } = useFetch(url)
    const hasData = data.length > 0

    return (
        <Layout setNotes={withModal ? setData : undefined}>
            {!hasData && !loading ? <NoResults /> : (
                <div className="notes__container">
                    {loading ? <Spinner /> : data.map((note) => (
                        <Note
                            note={note}
                            key={note.id}
                            setNotes={setData}
                            deleteOnFavourite={deleteOnFavourite}
                        />
                    ))}
                </div>
            )}
        </Layout>
    )
}

export default NoteContainer
