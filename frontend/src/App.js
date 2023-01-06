import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import DogsPage from './components/Dogs/DogsPage';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      <div className="page-container">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/dogs" element = {<DogsPage/>}/>
            <Route path="/checkout" element = {<Cart/>}/>
          
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
