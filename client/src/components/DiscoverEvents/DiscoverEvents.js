import React, { useState } from 'react';
import '../DiscoverEvents/DiscoverEvents.scss'; 
import { useEffect } from 'react';
import DiscoverEventsCard from '../DiscoverEventsCard/DiscoverEventsCard';

function DiscoverEvents({eventName, setEventName,date,setDate,time,setTime,image,setImage,description,setDescription,createdBy,setcreatedBy}){ 

    const [events, setEvents] = useState([]); 

    function addEvent(newEvent){
        setEvents([...events, newEvent]); //might not be in the correct place.. needs to go with the other events on dash 
    }

    useEffect(() => {
        fetch("https://app.ticketmaster.com/discovery/v2/events.json?dmaId=422&apikey=shAfe86LVSVWkdRIRrG3BUq1N13kRA22&size=8&page=120")
        //need to use pagination to actually have the user be able to scroll through all of the events 
        //currently set to only show 8 events per page and on page 120
          .then((r) => r.json())
          .then((data) => setEvents(data._embedded.events)); 
      }, []);

      // events.map((event)=>console.log(event))

      // console.log(events)

    return (
        <>
        {events.map((event)=>{
        return <DiscoverEventsCard 
            //API data
            key={event.id}
            APIname={event.name}
            APIurl={event.url}
            APIimage={event.images[3].url}
            APIdate={event.dates.start.localDate}
            APItime={event.dates.start.localTime}
            APIcategory={event.classifications[0].segment.name}
            APIgenre={event.classifications[0].genre.name}
            APIvenue={event._embedded.venues[0].name}
            
            // state being passed down from app 
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

        /> })}
        </>
    ); 

}

export default DiscoverEvents; 