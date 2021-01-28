import React from 'react'
import "./NoResults.css"
import { HiEmojiSad } from "react-icons/hi"

function NoResults() {
    return (
        <div className="no__results">
            <HiEmojiSad size={60} />
            <div className="no__results__body">
                <h1>We Couldn't Find Any Results!</h1>
                <p>Is your search query correct? Navigate to the home page to create a new note.</p>
            </div>
        </div>
    )
}

export default NoResults
