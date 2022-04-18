import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


function Profile() {

    const [userProfile, setUserProfile] = useState([]); 

    useEffect(() => {
        fetch('/me')
            .then((r) => r.json())
            .then((userData) => setUserProfile(userData)); 
    },[]); 
    // console.log(userProfile)

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
                <h1> Profile Page </h1>
                <div className="userInfo">
                    <p> Hi, {userProfile.first_name}!</p>
                    <p> Username: {userProfile.username}</p>
                    <img src={userProfile.user_profile_image}></img>
                </div>
                <button 
                onClick={handleLogOut}>            
                <Link to="/">Logout</Link>
                </button>

            </>
        );
}

export default Profile;