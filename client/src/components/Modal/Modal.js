import React from 'react';
import '../Modal/Modal.scss';

function Modal({ APIname, APIurl,APIimage,APIdate,APItime,APIvenue,APIcategory,APIgenre,eventName, setEventName,date,setDate,time,setTime,image,setImage,description,setDescription,createdBy,setcreatedBy, open, onClose}) {

    function handleSubmit(e){
        e.preventDefault();
        fetch('/scheduled_events', { //fetch to the events themselves
            method: 'POST', 
            headers: {
            "Content-Type" : 'application/json',
            },
            body: JSON.stringify({
                eventName: APIname, 
                date: APIdate,
                time: APItime,
                description: description,
                image: APIimage,
                createdBy: createdBy
            })
        })

        // .then(resp => resp.json())
        // .then(data => console.log(data))
        // this.setState({eventName: '', date: '', time: '', description:'', image:'', createdBy:''})
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
                        </label>
                        <input 
                            onChange={(e)=> {
                                // console.log('event',e.target.value)
                                setEventName(e.target.value)}} 
                            type="text" 
                            name="event" 
                            defaultValue={APIname}
                            />
                        <label>
                            Date: 
                        </label>
                        <input 
                            onChange={(e)=> {
                                // console.log('e.target.value',e.target.value)
                                setDate(e.target.value)}} 
                            type="text" 
                            name="date" 
                            defaultValue={APIdate}
                            />
                        <label>
                            Time: 
                        </label>
                        <input 
                            onChange={(e)=> setTime(e.target.value)} 
                            type="text" 
                            name="time" 
                            defaultValue={APItime}
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
                            defaultValue={APIimage}
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
                    <input type="submit" value="Submit" onSubmit={handleSubmit}/>
                    </form>
                    
                    <button onClick={onClose}> Close </button>
                </div>
            </div>
        );
}

export default Modal;