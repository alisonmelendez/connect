import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import Navbar from '../Navbar/Navbar';


function Profile() {

    const [userProfile, setUserProfile] = useState([]); 

    useEffect(() => {
        fetch('/me')
            .then((r) => r.json())
            .then((userData) => setUserProfile(userData)); 
    },[]); 

    function handleLogOut(){
        fetch("/logout", {
            method: "DELETE"
        }).then((res) => {
            if (res.ok) {
                setUserProfile(null);
            }
        })

    }
    
        return (
            <>
                <Navbar/>
                <div className='entireUserInfo'>
                    <h1 id="profileHeader"> Account Information </h1>
                    <div className="userInfo">
                        <img id="userPic" src={userProfile.user_profile_image}></img>
                        <p> Hi, {userProfile.first_name}!</p>
                        <p> Username: {userProfile.username}</p>
                    </div>
                    <button id="profileLogOut"
                    onClick={handleLogOut}>            
                    <Link style={{ textDecoration: 'none', color:'black' }} to="/">Logout</Link>
                    </button>
                </div>
            </>
        );
}

export default Profile;