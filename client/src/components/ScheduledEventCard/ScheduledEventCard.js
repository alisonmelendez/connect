import React, { useState } from 'react';
import '../ScheduledEventCard/ScheduledEventCard.scss'; 
import Modal from '../Modal/Modal';
import InviteesModal from '../InviteesModal/InviteesModal';


function ScheduledEventCard({ eventID, name, date, description, createdBy, image, time, onHandleEventDelete }){

    const[isOpen, setIsOpen] = useState(false); 



    function handleEventDelete(){ 
        fetch(`/scheduled_events/${eventID}`, {
        method: "DELETE",
      })
        .then(() => onHandleEventDelete(eventID));
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
                <button onClick={() => setIsOpen(true)}> Add Invitees </button>
                <InviteesModal
                    open={isOpen} 
                    onClose={() => setIsOpen(false)}
                />
            </div>
        </>
    ); 

}

export default ScheduledEventCard; 