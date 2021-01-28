import { useField } from 'formik'
import React from 'react'

import "./TextInput.css"
import "./Form.css"

interface CustomInputProps  {
    placeholder: string;
    name: string;
    textarea?: boolean;
    type: string;
    label: string;
}

const TextInput: React.FC<CustomInputProps> = ({ label, textarea, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className={`form__control ${meta.error ? "error" : ""}`}>
            <label htmlFor={field.name}>
                { meta.error || label }
            </label>
            { textarea ? (
                <textarea {...field} {...props} />
            ) : (
                <input {...field} {...props} />
            )}
        </div>
    )
}

export default TextInput
