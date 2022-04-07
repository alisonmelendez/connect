import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){ 

    return (
        <React.Fragment>
           <Link to="/"> Discover</Link>
           <Link to="/dashboard"> Dashboard</Link>
        </React.Fragment>
    ); 

}

export default Navbar; 