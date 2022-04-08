import React, { useState } from 'react';
import '../DiscoverEvents/DiscoverEvents.scss'; 
import Modal from '../Modal/Modal';

function DiscoverEvents(){ 

    const[isOpen, setIsOpen] = useState(false); 

    function randomFunction(){
        //modal will pop up here as it is rendered on click of the plus sign 
        console.log('I was clicked woo'); 
        
    }

    return (
        <>
        {/* <p>Events Categories will go here to filter them</p> */}
        <div className="eventCategoriesContainer">
            {/* <div className="eventInfoContainer"> */}
                <h3 className="eventHeader">Event Title</h3>
                <p className="eventInfo">Event Short Bio</p>
            {/* </div>  */}
            <button onClick={() => setIsOpen(true)}className="plusSign">+</button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
        </>
    ); 

}

export default DiscoverEvents; 