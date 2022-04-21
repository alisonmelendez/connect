import React, { useState } from 'react';
import '../ScheduledEventCard/ScheduledEventCard.scss'; 
import InviteesModal from '../InviteesModal/InviteesModal';


function ScheduledEventCard({ invitees, eventID, name, date, description, createdBy, image, time, onHandleEventDelete, userInfo, setUserInfo }){

    const[isOpen, setIsOpen] = useState(false); 

    function handleEventDelete(){ 
        fetch(`/scheduled_events/${eventID}`, {
        method: "DELETE",
      })
        .then(() => onHandleEventDelete(eventID));
    }

    if(!userInfo) return null
    if(!invitees) return null

    // console.log(userInfo)

    let guests = userInfo.filter(user => invitees.map(invitee => user.id === invitee ? true : false).includes(true))

    let guestsNames = guests.map(guest => `${guest.first_name} `)
        

    return (
        <>
            <div className="innerLargeContainer">
            <div className="eventCategoriesContainer">
            {/* <div className='eventCard'> */}
                <h2>{name}</h2>
                <div className="eventdataOne">
                <img id="schCalIcon" src="https://img.icons8.com/android/48/000000/calendar.png"/>
                <p>{date} {time}</p>
                </div>
                <p>{description}</p>
                <p>Created By: {createdBy}</p>
                <div id="inviteeNames">
                <p>Invitees: </p>
                <p id="guestNames"> {guestsNames} </p> 
                </div>
                <img id="sEventImage" src={image}></img>
                <button className="scheduledButtons" onClick={handleEventDelete}> Delete </button>
                <button className="scheduledButtons" onClick={() => setIsOpen(true)}> Add Invitees </button>
                <InviteesModal
                    open={isOpen} 
                    onClose={() => setIsOpen(false)}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    eventID={eventID}
                />
            {/* </div> */}
            </div>
            </div>

        </>
    ); 

}

export default ScheduledEventCard; 