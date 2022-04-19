import React from 'react';
import { useEffect, useState } from 'react';
import ScheduledEventCard from '../ScheduledEventCard/ScheduledEventCard';

function Dashboard() {

    const [displayEvents, setdisplayEvents] = useState([]); 

    useEffect(() => {
        fetch('/scheduled_events')
          .then((r) => r.json())
          .then((data) => setdisplayEvents(data)); 
      }, []);

      console.log(displayEvents)
        return (
            <>
                <h1> Dashboard </h1>

                {displayEvents.map((event)=> {
                return <ScheduledEventCard
                key={event.id}
                name={event.eventName}
                date={event.date}
                description={event.description}
                createdBy={event.createdBy}
                image={event.image}
                time={event.time}
                />})
        }
                

            </>
        );
}

export default Dashboard;