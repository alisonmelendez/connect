import React from 'react';
import { useEffect, useState } from 'react';
import ScheduledEventCard from '../ScheduledEventCard/ScheduledEventCard';
import NewEventModal from '../NewEventModal/NewEventModal';
import './Dashboard.scss'; 
import Navbar from '../Navbar/Navbar';

function Dashboard() {

    const [openModal, setOpenModal] = useState(false); 
    const [displayEvents, setdisplayEvents] = useState([]); 

    const [event, setEvent] = useState(""); 
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(""); 
    const [image, setImage] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [createdBy, setcreatedBy] = useState(""); 
  

    useEffect(() => {
        fetch('/me')
          .then((r) => r.json())
          .then((data) => setdisplayEvents(data.scheduled_events)); 
      }, []);

    function onHandleEventDelete(removedEvent){
        const remainingEvents = displayEvents.filter((event) => event.id !== removedEvent)
        setdisplayEvents(displayEvents.filter((event) => event.id !== removedEvent))
    }

    function handleAddNewEvent(newEvent){
        setdisplayEvents([...displayEvents, newEvent])
    }

        return (
            <>
                <Navbar/>
                <h1> Dashboard </h1>

                {displayEvents.map((event)=> {
                return <ScheduledEventCard
                key={event.id}
                eventID={event.id}
                name={event.eventName}
                date={event.date}
                description={event.description}
                createdBy={event.createdBy}
                image={event.image}
                time={event.time}
                onHandleEventDelete={onHandleEventDelete}
                    />})
            
                }


                
                <div className='addNewEvent'>
                    <button onClick={() => setOpenModal(true)} className="addNewEventButton">+</button>

                    <NewEventModal
                        open={openModal}
                        onClose={() => setOpenModal(false)} 

                        event={event}
                        setEvent={setEvent}
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

                        setdisplayEvents={setdisplayEvents}
                        handleAddNewEvent={handleAddNewEvent}
                    />
                </div>
            </>
        );
}

export default Dashboard;