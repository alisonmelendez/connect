import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Landing() {

    const [createdFirstName, setCreatedFirstName] = useState("");
    const [createdLastName, setCreatedLastName] = useState("");
    const [createdUserName, setCreatedUserName] = useState("");
    const [createdPassword, setCreatedPassword] = useState("");
    const [createdPasswordConfirm, setCreatedPasswordConfirm] = useState("");
    const [createdImage, setCreatedImage] = useState("https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png");

    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSignup(e){
        e.preventDefault();
        fetch('/signup', { 
            method: 'POST', 
            headers: {
            "Content-Type" : 'application/json',
            },
            body: JSON.stringify({
                first_name: createdFirstName,
                last_name: createdLastName,
                username: createdUserName, 
                password: createdPassword, 
                password_confirmation: createdPasswordConfirm, 
                user_profile_image: createdImage
            })
            
        })
    }

    function handleLogin(e){
        e.preventDefault();
        fetch('/login', { 
            method: 'POST', 
            headers: {
            "Content-Type" : 'application/json',
            },
            body: JSON.stringify({
                username: username, 
                password: password, 
            })
            
        })

    }
        return (
            <>
                <h1> Landing </h1>
                <div>
                    <p>Image to go here</p>
                </div>

                <div className="loginForm">
                    <h3>Login</h3>

                    <form onSubmit={handleLogin}>

                        <label htmlFor="userName">Email:</label>
                        <input 
                            onChange={(e)=> {setUsername(e.target.value)}} 
                            type="email" 
                            id="email" 
                            name="email"
                            value={username}
                        >
                            
                        </input>

                        <label htmlFor="pwd">Password:</label>
                        <input 
                            onChange={(e)=> {setPassword(e.target.value)}} 
                            type="password" 
                            id="pwd" 
                            name="pwd" 
                            minLength="8"
                            value={password}
                        >
                        </input>

                        <button type="submit" onClick={handleLogin} > <Link to="/discover"> Login</Link></button>
                    </form>
                </div>
                
                <div className="newUserForm">
                    <h3>New User</h3>
                    <p>Don't have an account yet? </p>

                    <form onSubmit={handleSignup}>

                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            onChange={(e)=> {setCreatedFirstName(e.target.value)}} 
                            type="text" 
                            id="firstName" 
                            name="firstName"
                            value={createdFirstName}
                        >
                        </input>

                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            onChange={(e)=> {setCreatedLastName(e.target.value)}} 
                            type="text" 
                            id="lastName" 
                            name="lastName"
                            value={createdLastName}
                        >
                        </input>

                        <label htmlFor="userName">Email:</label>
                        <input                             
                            onChange={(e)=> {setCreatedUserName(e.target.value)}} 
                            type="email" 
                            id="createdEmail" 
                            name="email"
                            value={createdUserName}
                        >
                        </input>

                        <label htmlFor="pwd">Password:</label>
                        <input 
                            onChange={(e)=> {setCreatedPassword(e.target.value)}} 
                            type="password" 
                            id="createdPwd" 
                            name="pwd" 
                            minLength="8"
                            value={createdPassword}
                        >
                        </input>

                        <label htmlFor="pwd">Password Confirmation:</label>
                        <input 
                            onChange={(e)=> {setCreatedPasswordConfirm(e.target.value)}} 
                            type="password" 
                            id="confirmCreatedPwd" 
                            name="pwd" 
                            minLength="8"
                            value={createdPasswordConfirm}
                        >
                        </input>

                        <label htmlFor="avatar">Avatar:</label>
                        <input
                            onChange={(e)=> {setCreatedImage(e.target.value)}}  
                            // type="file" 
                            type="text"
                            id="avatar" 
                            name="avatar" 
                            defaultValue={createdImage}  
                        >
                        </input>
                        <input type="submit" onSubmit={handleSignup}></input>
                    </form>
                </div>
            </>
        );
}

export default Landing;