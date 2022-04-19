import React from 'react';
import '../ScheduledEventCard/ScheduledEventCard.scss'; 


function ScheduledEventCard({ name, date, description, createdBy, image, time }){
    
    return (
        <>
       <div className='eventCard'>
           <h2>{name}</h2>
           <p>{date} {time}</p>
           <p>{description}</p>
           <p>{createdBy}</p>
           <img src={image}></img>
       </div>
       
        </>
    ); 

}

export default ScheduledEventCard; 