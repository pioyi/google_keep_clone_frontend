import React from 'react'
import "./PageLayout.css"

import Sidebar from '../Sidebar'
import Header from "../Header"
import { INote } from '../../types'

interface PageLayoutProps {
    children: React.ReactChild | React.ReactChild[];
    setNotes?: (data: INote[]) => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({ setNotes, children }) => {
    return (
        <div>
            <Header setNotes={setNotes} />
            <div className="page__layout">
                <Sidebar />
                <div className="right__container">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default PageLayout
