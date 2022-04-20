import React, { useState, useEffect } from 'react';
import EventCategoriesCard from '../EventCategoriesCard/EventCategoriesCard';

function EventCategories({ setFilteredCategories, handleCategoryChange }){ 


    // useEffect(() => {
    //     fetch("https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=shAfe86LVSVWkdRIRrG3BUq1N13kRA22&size=6")
    //       .then((r) => r.json())
    //       .then((data) => setCategories(data._embedded.classifications)); 
    //   }, []);

    // categories.map((category)=> console.log(category.segment.name))
    
    const categories = ["All", "Arts & Theatre", "Music", "Sports"]

    return (
        <>

        {categories.map((category,i)=> {
            return <EventCategoriesCard
                key={i}
                category={category}
                setFilteredCategories={setFilteredCategories}
                handleCategoryChange={handleCategoryChange}
                />})
        }
        </>
    ); 

}

export default EventCategories; 