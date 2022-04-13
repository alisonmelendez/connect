import React from 'react';
import DiscoverEvents from '../DiscoverEvents/DiscoverEvents';
import EventCategories from '../EventCategories/EventCategories';

// This is the home page 

function Discover({eventName, setEventName,date,setDate,time,setTime,image,setImage,description,setDescription,createdBy,setcreatedBy}) {
        return (
            <>
                <h1>Home Page</h1>
                <EventCategories/>
                <br/>
                <DiscoverEvents
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
                />
            </>
        );
}

export default Discover;