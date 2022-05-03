import React from 'react';
import { useEffect, useState } from 'react';
import ScheduledEventCard from '../ScheduledEventCard/ScheduledEventCard';
import NewEventModal from '../NewEventModal/NewEventModal';
import './Dashboard.scss'; 
import Navbar from '../Navbar/Navbar';
import ScrollButton from '../ScrollButton/ScrollButton';
import './Dashboard.scss'

function Dashboard() {

    const [openModal, setOpenModal] = useState(false); 
    const [displayEvents, setdisplayEvents] = useState([]); 

    const [event, setEvent] = useState(""); 
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(""); 
    const [image, setImage] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [createdBy, setcreatedBy] = useState(""); 

    const [userInfo, setUserInfo] = useState(""); 
  

    useEffect(() => {
        fetch('/me')
          .then((r) => r.json())
          .then((data) => setdisplayEvents(data.scheduled_events)); 
      }, []);

    function onHandleEventDelete(removedEvent){
        setdisplayEvents(displayEvents.filter((event) => event.id !== removedEvent))
    }

    function handleAddNewEvent(newEvent){
        setdisplayEvents([...displayEvents, newEvent])
    }

    useEffect(() => {
        fetch('/users')
        .then(response => response.json())
        .then(data => setUserInfo(data));
    }, []);

        return (
            <>
                <Navbar/>
                <h1 id="dashTitle"> Dashboard </h1>

                <div className='addNewEvent'>
                    <button onClick={() => setOpenModal(true)} className="addNewEventButton"> Add New Event </button>

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


                <div className="hugeContainer">
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
                    invitees={event.invitees}
                    onHandleEventDelete={onHandleEventDelete}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    />})
            
                }
                </div>

                    <ScrollButton/>

            </>
        );
}

export default Dashboard;