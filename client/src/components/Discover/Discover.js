import React from 'react';
import DiscoverEvents from '../DiscoverEvents/DiscoverEvents';
import EventCategories from '../EventCategories/EventCategories';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Discover.scss'

// This is the home page 

function Discover({eventName, setEventName,date,setDate,time,setTime,image,setImage,description,setDescription,createdBy,setcreatedBy}) {

    const [filterCategory, setFilteredCategories] = useState(""); //for filtering on the discover page 


    function handleCategoryChange(e) {
        setFilteredCategories(e)
    }

        return (
            <>
                <Navbar/>
                <h1 id="discoverTitle">Discover</h1>
                <EventCategories
                    setFilteredCategories={setFilteredCategories}
                    handleCategoryChange={handleCategoryChange}
                />
                <br/>
                <DiscoverEvents
                    filterCategory={filterCategory}
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
                    handleCategoryChange={handleCategoryChange}
                />
            </>
        );
}

export default Discover;