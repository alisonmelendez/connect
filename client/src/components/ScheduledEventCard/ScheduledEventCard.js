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

    let guests = userInfo.filter(user => invitees.map(invitee => user.id === invitee ? true : false).includes(true))

    let guestsNames = guests.map(guest => `${guest.first_name} `)

    // let guestTern = APItimeHour > 12 ? APItimeHour - 12 : APItimeHour
        

    return (
        <>
            <div className="innerLargeContainer">
            <div className="eventCategoriesContainer">
                <img id="sEventImage" src={image}></img>
                <h2 id="schEvenName">{name}</h2>
                <div className="eventdataOne">
                    <img id="schCalIcon" src="https://img.icons8.com/android/48/000000/calendar.png"/>
                    <p>{date} {time}</p>
                </div>

                <div id="schInfo">
                    <p>Created By: {createdBy}</p>
                    <hr id="lineBreak"></hr>
                    <p>{description}</p>
                </div>

                <div id="inviteeNames">
                <p>Invitees: </p>
                <p id="guestNames"> {guestsNames} </p> 
                </div>

                <div className="schEventButtons">
                    <button className="scheduledButtons" onClick={handleEventDelete}> Delete </button>
                    <button className="scheduledButtons" onClick={() => setIsOpen(true)}> Add Invitees </button>
                </div>

                <InviteesModal
                    open={isOpen} 
                    onClose={() => setIsOpen(false)}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    eventID={eventID}
                />
            </div>
            </div>

        </>
    ); 

}

export default ScheduledEventCard; 