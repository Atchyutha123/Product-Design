import { useState } from 'react'
import './App.css'
import Layout from './Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PolicyPage from './PrivacyPage.jsx';
import MainC from './MainC.jsx';
import Termsconditions from './Termsconditions.jsx';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MainC/>}/>   
        <Route path='/privacy-policy' element={<PolicyPage/>}/>
        <Route path='/terms' element={<Termsconditions/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    <WhatsAppButton/>
    </>
  )
}

export default App


import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "918309390566"; // ← Replace with your actual number (include country code, no +)
  const message = "Hello! I’d like to know more about your services."; // default message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};
