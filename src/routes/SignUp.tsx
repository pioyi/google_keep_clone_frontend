import React, { useContext } from 'react'
import { Link, useHistory } from "react-router-dom"
import { Form, Formik } from 'formik'
import TextInput from '../components/Form/TextInput'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

function SignUp() {
    const { login } = useContext(AuthContext)
    const history = useHistory()

    return (
    <div className="form__page">
    <div className="form__container">
        <h1 className="form__title">Start for free</h1>
        <p className="form__description">Create a new account and start writting your personal notes. Already have an account? <Link to="/login">Login instead.</Link></p>
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={(values, { setErrors }) => {
                axios.post("/auth/register", values)
                    .then(res => {
                        login(res.data)
                        history.push("/")
                    })
                    .catch(error => setErrors(error.response.data))
            }}
        >
            <Form>
                <TextInput
                    name="username"
                    type="text"
                    placeholder="5+ Characters, 20 Maximum"
                    label="Username"
                />
                <TextInput
                    name="password"
                    type="password"
                    placeholder="Enter a secure password"
                    label="Password"
                />
                <TextInput
                    name="email"
                    type="email"
                    placeholder="email@outlook.com"
                    label="E-mail"
                />
                <button type="submit" className="btn primary">Sign Up</button>
            </Form>
        </Formik>
    </div>
    </div>
    )
}

export default SignUp
