//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css'
//import App from './App.jsx'
//import { Header } from './Components/Header.jsx'
//import { Arraysample } from './Components/Arraysample.jsx'
import { UserCard } from './UserCard.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     { /*<App />*/} 
     <UserCard />
  </React.StrictMode> 
)
