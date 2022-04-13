import React from 'react';
import '../Modal/Modal.scss';

function Modal({ eventName, setEventName,date,setDate,time,setTime,image,setImage,description,setDescription,createdBy,setcreatedBy,open, onClose}) {

    function handleSubmit(e){
        e.preventDefault();
        fetch('/scheduled_events', { //fetch to the events themselves
            method: 'POST', 
            headers: {
            "Content-Type" : 'application/json',
            },
            body: JSON.stringify({
                eventName: {eventName}, 
                date: {date},
                time: {time},
                description:{description},
                image: {image},
                createdBy: {createdBy}
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    if(!open){
        return null
    }

        return (
            <div className="overlay">
                <div className="entireModal">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Event Name: 
                            <input 
                            onChange={(e)=> setEventName(e.target.value)} 
                            type="text" 
                            name="event" 
                            defaultValue="chickenpotpie"
                            />
                        </label>
                        <label>
                            Date: 
                            <input 
                            onChange={(e)=> setDate(e.target.value)} 
                            type="text" 
                            name="date" 
                            value={date}
                            />
                        </label>
                        <label>
                            Time: 
                            <input 
                            onChange={(e)=> setTime(e.target.value)} 
                            type="text" 
                            name="time" 
                            value={time}
                            />
                        </label>
                        <label>
                            Description: 
                            <textarea 
                            onChange={(e)=> setDescription(e.target.value)} 
                            type="text" 
                            name="description" 
                            value={description}
                            />
                        </label>
                        <label>
                            Image: 
                            <input 
                            onChange={(e)=> setImage(e.target.value)} 
                            type="text" 
                            name="image" 
                            value={image}
                            />
                        </label>
                        <label>
                            Created By: 
                            <input 
                            onChange={(e)=> setcreatedBy(e.target.value)} 
                            type="text" 
                            name="creator" 
                            value={createdBy}
                            />
                        </label>
                    <input type="submit" value="Submit" />
                    </form>
                    
                    <button onClick={onClose}> Close </button>
                </div>
            </div>
        );
}

export default Modal;