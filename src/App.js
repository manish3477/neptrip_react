import React from 'react';
import './app.css'
import NavBar from './components/Navbar';
import Home from './pages/Home';
import
 {BrowserRouter as Router,
   Routes,
    Route,
 } from 'react-router-dom'
import Destinations from './pages/Destinations';
import Error from './pages/Error';
import Destinationdescription from './pages/Destinationdescription';
import Gallery from './pages/Gallery';
function App() {
  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/destinations' element={<Destinations/>}></Route>
          <Route exact path='/destination/:id' element={<Destinationdescription/>}></Route>
          <Route exact path='/gallery' element={<Gallery/>}></Route>
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
