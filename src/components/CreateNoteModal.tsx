import React, { useContext } from 'react'
import Modal from './Modal'
import { Form, Formik } from "formik"
import TextInput from "./Form/TextInput"
import axios from "axios"
import { AuthContext } from '../context/AuthContext'
import { INote } from '../types'

interface NoteModalProps {
    isOpen: boolean;
    setNotes: (data: any) => void;
    closeModal: () => void;
}

const CreatePostModal: React.FC<NoteModalProps> = ({ setNotes, isOpen, closeModal }) => {
    const { userData } = useContext(AuthContext)

    return (
        <Modal title="Create a new note" isOpen={isOpen}>
            <p className="modal__description">What are you up to? Provide a title followed by your note's content.</p>
            <Formik
                initialValues={{ title: "", content: "" }}
                onSubmit={(values, { setErrors }) => {
                    axios.post("/users/current/note", values, {
                        headers: { google_keep_clone_token: userData!.token }
                    })
                    .then(res => {
                        closeModal()
                        setNotes((notes: INote[]) => [res.data, ...notes])
                    })
                    .catch(error => setErrors(error.response.data))
                }}
            >
                <Form>
                    <TextInput
                        name="title"
                        type="text"
                        placeholder="Enter your note's title [5 - 40] "
                        label="Title"
                    />
                    <TextInput
                        textarea
                        name="content"
                        type="text"
                        placeholder="Enter your note's content [10 - 300]"
                        label="Content"
                    />
                    <div className="modal__footer">
                        <button type="submit" className="btn primary">Submit</button>
                        <button className="btn" onClick={closeModal}>Cancel</button>
                    </div>
                </Form>
            </Formik>
        </Modal>
    )
}

export default CreatePostModal
