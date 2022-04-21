import React from 'react';
import '../EventCategoriesCard/EventCategoriesCard.scss'; 
import { useState } from 'react';

function EventCategoriesCard({category, setFilteredCategories, handleCategoryChange}){ 
//container holding each of the event category elements themselves 

//map through each category so that you can filter the page with certain content 

//static array with just the names; for styling later can just nest other elements of data 
//example, adding images or images for each of the containers 

    //state for the filtering of the categories 
  

    function onCategoryClick(e){
        handleCategoryChange(e.target.textContent);
    }

    return (
        // <div className="entireEventCategoriesContainer">
            <div> 
                <button onClick={onCategoryClick} className="eventTitle" value={category}>{category}</button>
            </div>
        // </div>
    ); 

}

export default EventCategoriesCard; 