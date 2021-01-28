import React from "react"
import "./Spinner.css"

interface SpinnerProps {
    marginTop?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ marginTop = 0 }) => {
    return (
        <div className="spinner__container" style={{ marginTop }}>
            <div className="spinner" />
        </div>
    )
}

export default Spinner
