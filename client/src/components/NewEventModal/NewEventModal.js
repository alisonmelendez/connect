import React from 'react';
import './NewEventModal.scss'

function NewEventModal({ handleAddNewEvent, open, onClose, event, setEvent,date,setDate,time,setTime,image,setImage,description,setDescription,createdBy,setcreatedBy }) {

    function handleEventSubmit(e){
        e.preventDefault();
        fetch('/scheduled_events', { 
            method: 'POST', 
            headers: {
            "Content-Type" : 'application/json',
            },
            body: JSON.stringify({
                eventName: event, 
                date: date,
                time: time,
                description: description,
                image: image,
                createdBy: createdBy,
                invitees: []
            }),
        })
            .then(response => response.json())
            .then((userData) => handleAddNewEvent(userData))
            alert("Event Created")

            setEvent('')
            setDate('')
            setTime('')
            setDescription('')
            setImage('')
            setcreatedBy('')   
        }
        
    if(!open){
        return null
    }

        return (
            <>

                <div className="overlay">
                <div className="entireModal">
                    <form id="uglyModalFix" onSubmit={handleEventSubmit}>
                        <label>
                            Event Name: 
                        </label>
                        <input 
                            onChange={(e)=> {
                                setEvent(e.target.value)}} 
                            type="text" 
                            name="event" 
                            value={event}
                            />
                        <label>
                            Date: 
                        </label>
                        <input 
                            onChange={(e)=> {
                                setDate(e.target.value)}} 
                            type="text" 
                            name="date" 
                            value={date}
                            />
                        <label>
                            Time: 
                        </label>
                        <input 
                            onChange={(e)=> setTime(e.target.value)} 
                            type="text" 
                            name="time" 
                            value={time}
                            />
                        <label>
                            Description: 
                        </label>
                        <textarea 
                            onChange={(e)=> setDescription(e.target.value)} 
                            type="text" 
                            name="description" 
                            value={description}
                            />
                        <label>
                            Image: 
                        </label>
                        <input 
                            onChange={(e)=> setImage(e.target.value)} 
                            type="text" 
                            name="image" 
                            value={image}
                            />
                        <label>
                            Created By: 
                        </label>
                        <input 
                            onChange={(e)=> setcreatedBy(e.target.value)} 
                            type="text" 
                            name="creator" 
                            value={createdBy}
                            />
                    <input type="submit" value="Submit" onSubmit={handleEventSubmit}/>
                    <button className="modalCloseButton" onClick={onClose}> Close </button>

                    </form>
                </div>
            </div>

            </>
        );
}

export default NewEventModal;