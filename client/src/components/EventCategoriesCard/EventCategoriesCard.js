import React from 'react';
import '../EventCategoriesCard/EventCategoriesCard.scss'; 

function EventCategoriesCard({name}){ 
//container holding each of the event category elements themselves 

//map through each category so that you can filter the page with certain content 



    return (
        <div className="entireEventCategoriesContainer">
            <div className="eventContainer"> 
                <p className="eventTitle">{name}</p>
            </div>
        </div>
    ); 

}

export default EventCategoriesCard; 