import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision, Testimonials } from "./pages/AboutUs";
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import {Home} from "./pages/Home"; 
import Content from './components/Content';

function App() {
  return (
    <div className='App'>
      <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/about-us/aim' element={<OurAim/>} />
        <Route path='/about-us/vision' element={<OurVision/>} />
        <Route path='/about-us/Testimonials' element={<Testimonials/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services/services1' element={<ServicesOne/>} />
        <Route path='/services/services2' element={<ServicesTwo/>} />
        <Route path='/services/services3' element={<ServicesThree/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/events/events1' element={<EventsOne/>} />
        <Route path='/events/events2' element={<EventsTwo/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
