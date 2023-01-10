import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import DogsPage from './components/Dogs/DogsPage';
import Cart from './components/Cart/Cart';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [allDogs, setAllDogs] = useState([])
  useEffect(() => {
  async function getData(){
      const res = await axios.get("/v1/dogs")
      return res
    }
    getData().then((res) => setAllDogs(res.data))
    getData.catch((err)=> console.log(err))
  }, [])
  return (
    <Router>
      <NavBar/>
      <div className="page-container">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/dogs" element = {<DogsPage allDogs={allDogs}/>}/>
            <Route path="/checkout" element = {<Cart/>}/>
          
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
