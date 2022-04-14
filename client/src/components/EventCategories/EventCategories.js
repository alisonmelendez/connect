import React, { useState, useEffect } from 'react';
import EventCategoriesCard from '../EventCategoriesCard/EventCategoriesCard';

function EventCategories(){ 

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // fetch("https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=shAfe86LVSVWkdRIRrG3BUq1N13kRA22&size=2&page=0")
        fetch("https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=shAfe86LVSVWkdRIRrG3BUq1N13kRA22&size=6")
          .then((r) => r.json())
          .then((data) => setCategories(data._embedded.classifications)); 
      }, []);

    categories.map((category)=> console.log(category.segment.name))

    return (
        <>
        
        <label htmlFor="site-search">Category Search: </label>
        <input type="search" id="site-search" name="q"></input>
        <button>Search</button>

        {categories.map((category)=> {
            return <EventCategoriesCard
                key={category.segment.id}
                name={category.segment.name}/>})
        }
        </>
    ); 

}

export default EventCategories; 