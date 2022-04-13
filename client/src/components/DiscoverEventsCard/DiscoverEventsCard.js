import React, { useState } from 'react';
import '../DiscoverEventsCard/DiscoverEventsCard.scss'; 
import Modal from '../Modal/Modal';

function DiscoverEventsCard({ APIname, APIurl,APIimage,APIdate,APItime,APIvenue,APIcategory,APIgenre,eventName, setEventName,date,setDate,time,setTime,image,setImage,description,setDescription,createdBy,setcreatedBy}){ 

    const[isOpen, setIsOpen] = useState(false); 

    return (
        <div className="eventCategoriesContainer">
            <h3 className="eventHeader">{APIname}</h3>
            <p>{APIdate} {APItime}</p>
            <p>{APIvenue}</p>
            {/* provides the overall category and the sub category  */}
            <p>{APIcategory}-{APIgenre}</p>
            <a href={APIurl}> Event Link</a>
            <img id="eventImage" src={APIimage}/> {/* can change the size of the image in DiscoverEvents */}
            <button onClick={() => setIsOpen(true)}className="plusSign">+</button>
            <Modal  
            eventName={eventName}
            setEventName={setEventName}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            image={image}
            setImage={setImage}
            description={description}
            setDescription={setDescription}
            createdBy={createdBy}
            setcreatedBy={setcreatedBy}

            //Modal open/close
            open={isOpen} 
            onClose={() => setIsOpen(false)} 
            />
        </div>
    ); 

}

export default DiscoverEventsCard; 