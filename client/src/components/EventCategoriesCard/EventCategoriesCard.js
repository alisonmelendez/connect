import React from 'react';
import '../EventCategoriesCard/EventCategoriesCard.scss'; 

function EventCategoriesCard({category, handleCategoryChange}){ 

    function onCategoryClick(e){
        handleCategoryChange(e.target.textContent);
    }

    return (
            <div className='categoryClick'> 
                <button onClick={onCategoryClick} id="eventTitle" value={category}>{category}</button>
            </div>
    ); 

}

export default EventCategoriesCard; 