import React from 'react';
import './App.css';
import Main_body1 from './main_body1';
import Contact from './contact';
import Why_us from './why_us'
import Read from './read';
import Trainer from './trainer';
import Footer from './footer';
import Header from './header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter >
      <Header/>
      <Routes>
     <Route path='/'element={ <Main_body1/>}></Route>
     <Route path='/WHY US'element={ <Why_us/>}></Route> 
     <Route path='/READ MORE'element={<Read/>}></Route>
     <Route path='/TRAINER'element={ <Trainer/>}></Route> 
     <Route path='/CONTACT'element={ <Contact/>}></Route> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
