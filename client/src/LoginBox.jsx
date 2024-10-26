import React from 'react';
import './LoginBox.css';
import CustomButton from './Common/CustomButton.jsx';
import CustomInput from './Common/CustomInput.jsx';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function LoginBox() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success") {
                navigate('/home')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login-box container mt-5">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <CustomInput 
                    name={"email"} 
                    label={"Email"} 
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CustomInput 
                    name={"password"} 
                    label={"Password"} 
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CustomButton 
                    label={"Login"}
                    type={"submit"}
                />
            </form>
            <p>Don’t have an account? <Link to="/register">Sign Up</Link></p>
        </div>
    );
};

export default LoginBox;