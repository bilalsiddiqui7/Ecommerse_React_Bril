import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { signUp } from '../services/userService'
import { useNavigate } from "react-router-dom";

function startsWithCapital(word) {
    return word.charAt(0) === word.charAt(0).toUpperCase()
}
function checkIfStringHasSpecialChar(_string) {
    let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (spChars.test(_string)) {
        return true;
    } else {
        return false;
    }
}
function LoginForm() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [nameMessage, setNameMessage] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")

    const navigate = useNavigate();

    const validateName = (e) => {
        e.preventDefault();
        if (name === "") {
            setNameMessage("User Name is required");
        } else {
            setNameMessage("");
        }
        setName(e.target.value)
    }

    const validatePassword = (e) => {
        e.preventDefault();
        if (password === "") {
            setPasswordMessage("Password is required");
        } else if (password.length < 8) {
            setPasswordMessage("Password length must be atleast 8 characters");
        } else if (password.length > 15) {
            setPasswordMessage("Password length must not exceed 15 characters");
        } else if (startsWithCapital(password) === false) {
            setPasswordMessage("First letter of the password should be capital");
        } else if (checkIfStringHasSpecialChar(password) === false) {
            setPasswordMessage("The password muct contain at least one special character");
        } else {
            setPasswordMessage("");
        }
        setPassword(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const arr = { name, password }
        console.log(arr)
        signUp(arr).then((resp) => {
            if(resp===true){
                navigate("/home")
            }
        }).catch((error) => console.log("Error-> " + error))
        
    }
    return (
        <div>
            <form name="loginForm" onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <p className="para">Take your art to the next level.</p>
                <label htmlFor="name"> Plese enter your name </label>
                <input className='inputField' type="text" id="name" name="name" autoComplete="off" value={name} onChange={validateName} />
                <div className='errorMessage'>{nameMessage}</div>
                <label htmlFor="password">Please enter your password </label>
                <input className='inputField' type="text" id="password" name="password" autoComplete="off" value={password} onChange={validatePassword} />
                <div className='errorMessage'>{passwordMessage}</div>
                <Link to=
                    '/changepassword'>
                    <p style={{ color: 'green' }}>Change Password</p>
                </Link>
                <input type="submit" defaultValue="Submit" />
            </form>
        </div>
    )
}

export default LoginForm