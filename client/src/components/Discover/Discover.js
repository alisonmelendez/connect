import React from 'react';
import DiscoverEvents from '../DiscoverEvents/DiscoverEvents';
import EventCategories from '../EventCategories/EventCategories';

// This is the home page 

function Discover() {
        return (
            <>
                <h1>Home Page</h1>
                <EventCategories/>
                <br/>
                <DiscoverEvents/>
            </>
        );
}

export default Discover;