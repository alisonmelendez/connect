import './App.scss';
import Navbar from '../Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import Dashboard from '../Dashboard/Dashboard';
import Discover from '../Discover/Discover';
import Profile from '../Profile/Profile';
import { useState } from 'react';
import Landing from '../Landing/Landing';

function App() {

  const [eventName, setEventName] = useState(""); //set the API data name here so that it sets it as this at default? 
  const [date, setDate] = useState(""); 
  const [time, setTime] = useState(""); 
  const [image, setImage] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [createdBy, setcreatedBy] = useState(""); 

  
  return (   
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/discover" element=
        {<Discover
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
        />}>
          
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;