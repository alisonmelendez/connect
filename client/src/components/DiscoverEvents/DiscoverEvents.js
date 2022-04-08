import React from 'react';
import '../DiscoverEvents/DiscoverEvents.scss'; 

function DiscoverEvents(){ 

    return (
        <>
        {/* <p>Events Categories will go here to filter them</p> */}
        <div className="eventCategoriesContainer">
            {/* <div className="eventInfoContainer"> */}
                <h3 className="eventHeader">Event Title</h3>
                <p className="eventInfo">Event Short Bio</p>
            {/* </div>  */}
            <p className="plusSign">+</p>
        </div>
        </>
    ); 

}

export default DiscoverEvents; 