import React, { useState } from 'react';
import '../DiscoverEventsCard/DiscoverEventsCard.scss'; 
import Modal from '../Modal/Modal';

function DiscoverEventsCard({ APIname, APIurl,APIimage,APIdate,APItime,APIvenue,APIcategory,APIgenre,eventName, setEventName,date,setDate,time,setTime,image,setImage,description,setDescription,createdBy,setcreatedBy}){ 

    const[isOpen, setIsOpen] = useState(false); 

    //might be better to move this to where the date time is coming in 
    //that way it'll look better on the saved events card 

    let yearJSON = JSON.stringify({APIdate});
    let regexYear = yearJSON.match(/\d{4}/);

    let regexDate = yearJSON.match(/-\d{2}-/);
    let newDate = regexDate[0].replaceAll('-', '');

    //use finalDate 
    let finalMonth = regexDate[0].replaceAll('-0', '');
    let regexMonth = yearJSON.match(/(-[\d{2}][\d{2}])"/);
    let finalDate = regexMonth[1].replaceAll('-', '');

    return (

            <div className="innerLargeContainer">
                <div className="eventCategoriesContainer">
                    <h3 className="eventHeader">{APIname}</h3>
                    {/* <p>{APIdate} {APItime}</p> */}
                    <img id="disEventImage" src={APIimage}/> {/* can change the size of the image in DiscoverEvents */}

                    <div className="eventdataOne">
                    <img id="calIcon" src="https://img.icons8.com/android/48/000000/calendar.png"/>
                    <p>{finalMonth}{finalDate}-{regexYear[0]}</p>
                    <p>{APItime}</p>
                    </div>

                    <div className="eventdataTwo">
                    <img id="locationIcon" src="https://img.icons8.com/ios/50/000000/marker--v1.png"/>
                    <p>{APIvenue}</p>
                    {/* provides the overall category and the sub category  */}
                    <p>{APIcategory}-{APIgenre}</p>
                    </div>
                    
                    <a id="ticketLink" href={APIurl} target="_blank" rel="noreferrer noopener"> Ticket Link </a>
                    <button onClick={() => setIsOpen(true)} className="plusSign"> Add Event </button>
                    <Modal 

                    APIname={APIname}
                    APIurl={APIurl}
                    APIimage={APIimage}
                    APIdate={APIdate}
                    APItime={APItime}
                    APIcategory={APIcategory}
                    APIgenre={APIgenre}
                    APIvenue={APIvenue}

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

                    //Modal open/close
                    open={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    />
                </div>
            </div>
    ); 

}

export default DiscoverEventsCard; 