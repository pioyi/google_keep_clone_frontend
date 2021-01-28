import React, { useContext } from 'react'
import { Link, useHistory } from "react-router-dom"
import { Form, Formik } from 'formik'
import TextInput from '../components/Form/TextInput'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

function Login() {
    const { login } = useContext(AuthContext)
    const history = useHistory()

    return (
    <div className="form__page">
    <div className="form__container">
        <h1 className="form__title">Welcome back</h1>
        <p className="form__description">Log in to your account. Haven't created an account yet? <Link to="/signup">Sign up instead.</Link></p>
        <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values, { setErrors }) => {
                axios.post("/auth/login", values)
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
                <button type="submit" className="btn primary">Log In</button>
            </Form>
        </Formik>
    </div>
    </div>
    )
}

export default Login
