import React, { useState } from 'react';
import '../ScheduledEventCard/ScheduledEventCard.scss'; 
import Modal from '../Modal/Modal';


function ScheduledEventCard({ eventID, name, date, description, createdBy, image, time, onHandleEventDelete }){


    function handleEventDelete(){ 
        fetch(`/scheduled_events/${eventID}`, {
        method: "DELETE",
      })
        .then(() => onHandleEventDelete(eventID));
    }

    function test(){
        console.log('woo')
    }

    return (
        <>
            <div className='eventCard'>
                <h2>{name}</h2>
                <p>{date} {time}</p>
                <p>{description}</p>
                <p>{createdBy}</p>
                <img id="sEventImage" src={image}></img>
                <button onClick={handleEventDelete}> Delete </button>
                <button onClick={test}> Add Invitees </button>
            </div>
        </>
    ); 

}

export default ScheduledEventCard; 