import React, { useState } from 'react';
import './InviteesModal.scss';

function InviteesModal({ eventID, open, onClose, userInfo}) {

    const [inviteeID, setInviteeID] = useState([])

    function handleEventSubmit(e){
        e.preventDefault();
        fetch(`/scheduled_events/${eventID}`, { 
            method: 'PATCH', 
            headers: {
            "Content-Type" : 'application/json',
            },
            body: JSON.stringify({
                invitees: inviteeID
            }),
        })
            .then(response => response.json())
            .then((userData) => addInviteeToArray(userData))
            alert("Invitees Added")
        }


    function addInviteeToArray(e){
        if(e.target.checked) {
            setInviteeID([...inviteeID, e.target.value]); 
        } else {
            setInviteeID(inviteeID.filter(invitee => invitee !== e.target.value))
        }
    }

    let names = userInfo ? userInfo.map((user) => 
    <div className="areaAroundNames">
        <input onChange={addInviteeToArray} type='checkbox' value={user.id}/><h4 id="inviteUserNames">{user.first_name}</h4>

        {/* below also has a last name added */}
        {/* <input onChange={addInviteeToArray} type='checkbox' value={user.id}/><h4 id="inviteUserNames">{user.first_name} {user.last_name}</h4> */}
    </div>) : null



        
    if(!open){
        return null
    }

        return (
            <>
                

                <div className="overlay">
                <div className="entireModal">
                    <form onSubmit={handleEventSubmit}>
                        {names} 
                    <input type="submit" value="Submit" />
                    </form>
                    
                    <button className="modalCloseButton" onClick={onClose}> Close </button>
                </div>
            </div>

            </>
        );
}

export default InviteesModal;