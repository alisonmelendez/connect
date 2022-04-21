import React from 'react';
import './InviteesModal.scss';

function InviteesModal({ open, onClose,}) {

    // function handleEventSubmit(e){
    //     e.preventDefault();
    //     fetch('/scheduled_events', { 
    //         method: 'POST', 
    //         headers: {
    //         "Content-Type" : 'application/json',
    //         },
    //         body: JSON.stringify({
    //             eventName: event, 
    //             date: date,
    //             time: time,
    //             description: description,
    //             image: image,
    //             createdBy: createdBy
    //         }),
    //     })
    //         .then(response => response.json())
    //         .then((userData) => handleAddNewEvent(userData))
    //         alert("Event Created")

    //         setEvent('')
    //         setDate('')
    //         setTime('')
    //         setDescription('')
    //         setImage('')
    //         setcreatedBy('')   
    //     }
        
    if(!open){
        return null
    }

        return (
            <>

                <div className="overlay">
                <div className="entireModal">
                    {/* <form onSubmit={handleEventSubmit}> */}
                    <form>
                        <label>
                            Event Name: 
                        </label>
                        
                        <input
                            onChange={(e)=> {
                                console.log(e.target.value)}} 
                            type="text" 
                            name="event" 
                            // value={event}
                            />
                        <label>
                            Date: 
                        </label>
                        <input 
                            onChange={(e)=> {
                                console.log(e.target.value)}} 
                            type="text" 
                            name="date" 
                            // value={date}
                            />
                       
                    <input type="submit" value="Submit" />
                    {/* <input type="submit" value="Submit" onSubmit={handleEventSubmit} /> */}
                    </form>
                    
                    <button onClick={onClose}> Close </button>
                </div>
            </div>

            </>
        );
}

export default InviteesModal;