import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.scss'; 

function Navbar(){ 

    return (
        <div className="navLinks">
            <Link className="navLink" to="/"> Discover</Link>
            <Link className="navLink" to="/profile"> Profile</Link>
            <Link className="navLink" to="/dashboard"> Dashboard</Link>
        </div>
    ); 

}

export default Navbar; 