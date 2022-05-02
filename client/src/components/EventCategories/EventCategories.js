import React, { useState, useEffect } from 'react';
import EventCategoriesCard from '../EventCategoriesCard/EventCategoriesCard';
import './EventCategories.scss'

function EventCategories({ setFilteredCategories, handleCategoryChange }){ 
    
    const categories = ["All", "Arts & Theatre", "Music", "Sports"]

    return (
        <>
            <div className="filtersForCategoriesContainer">
                {categories.map((category,i)=> {
                    return <EventCategoriesCard
                        key={i}
                        category={category}
                        setFilteredCategories={setFilteredCategories}
                        handleCategoryChange={handleCategoryChange}
                        />})
                }
            </div>
        </>
    ); 

}

export default EventCategories; 