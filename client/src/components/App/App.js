import './App.css';
import Navbar from '../Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import Dashboard from '../Dashboard/Dashboard';
import Discover from '../Discover/Discover';

function App() {

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (   
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Discover/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;