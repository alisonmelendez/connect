import React, { useState } from 'react';
import '../DiscoverEvents/DiscoverEvents.scss'; 
import { useEffect } from 'react';
import DiscoverEventsCard from '../DiscoverEventsCard/DiscoverEventsCard';
import AddButton from '../ScrollButton/ScrollButton';


function DiscoverEvents({ handleCategoryChange, filterCategory, eventName, setEventName,date,setDate,time,setTime,image,setImage,description,setDescription,createdBy,setcreatedBy}){ 

    const [events, setEvents] = useState([]); 
    let [page, setPageNum] = useState(0); 

    useEffect(() => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?dmaId=422&apikey=shAfe86LVSVWkdRIRrG3BUq1N13kRA22&size=20&page=${page}&dmaId=345`)
        // fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&apikey=shAfe86LVSVWkdRIRrG3BUq1N13kRA22&size=20&page=${page}&dmaId=345`)
          .then((r) => r.json())
          .then((data) => setEvents(data._embedded.events));
      }, [page]); //if the user goes to a new page then new data is fetched (based on the page number)

    function movePageAhead(){
        page++; 
        setPageNum(page); 
    }

    function movePageBack(){
        if(page > 0){
            page--; 
            setPageNum(page); 
        }
    }
    
    let filterCategories = events.filter(event => {
        if (filterCategory === 'All'){
            return event 
        } else {
            return filterCategory ? event.classifications[0].segment.name.toLowerCase() === filterCategory.toLowerCase() : event 
        }
    });

    //formatting the date 
    
    // let yearJSON = JSON.stringify({APIdate});
    // let regexYear = yearJSON.match(/\d{4}/);

    // let regexDate = yearJSON.match(/-\d{2}-/);
    // let newDate = regexDate[0].replaceAll('-', '');

    // //use finalDate 
    // let regexMonth = yearJSON.match(/(-[\d{2}][\d{2}])"/);
    // let finalDate = regexMonth[1].replaceAll('-', '');

    // //using string properties instead for the month 
    // let month = yearJSON.slice(17, 19);
    // let formattedMonth = month.replaceAll('0','')
    

    // let convertedHour = APItimeHour > 12 ? APItimeHour - 12 : APItimeHour
    // let convertedMinute = APItimeHour >= 12 ? `${APItimeMinute} PM` : `${APItimeMinute} AM`
    // let APIconvertedTime = `${convertedHour}:${convertedMinute}`

    return (
        <>
            <div id="pageDisplay">
                <button onClick={movePageBack}><img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"/></button>
                <p> <span>{page}</span></p>
                <button onClick={movePageAhead}><img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png"/></button>
            </div>

            <div className="hugeContainer">
                {filterCategories.map((event)=>{
                    return <DiscoverEventsCard 
                    //API data
                    key={event.id}
                    APIname={event.name}
                    APIurl={event.url}
                    APIimage={event.images[3].url}
                    APIdate={event.dates.start.localDate}
                    APItimeHour={event.dates.start.localTime.slice(0,2)}
                    APItimeMinute={(event.dates.start.localTime.slice(3,5))}

                    APItime={event.dates.start.localTime.slice(0, event.dates.start.localTime.length - 3)}
                    APIcategory={event.classifications[0].segment.name}
                    APIgenre={event.classifications[0].genre.name}
                    APIvenue={event._embedded.venues[0].name}
                    
                    // state being passed down from app 
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
                
                    /> })
                }
                <AddButton/>
            </div>

        
        </>
    ); 

}

export default DiscoverEvents; 