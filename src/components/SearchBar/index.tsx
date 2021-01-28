import React, { useState } from 'react'
import "./SearchBar.css"
import { HiOutlineSearch } from "react-icons/hi"
import { useHistory } from 'react-router-dom'

const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>()
    const history = useHistory()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && searchQuery)
            history.push(`/search/${searchQuery.toLowerCase().replace(' ', '-')}`)
    }

    return (
        <div className="input__group" id="searchbar">
            <button className="button--svg">
                <HiOutlineSearch size={18} />
            </button>
            <input
                type="text"
                placeholder="Search.."
                className="searchbar"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
            />
        </div>
    )
}

export default SearchBar
