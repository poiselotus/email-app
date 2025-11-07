import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from '../../GIT-PROJECT/src/Sidebar'
import Layout from '../../GIT-PROJECT/src/Layout'
import { BrowserRouter } from "react-router-dom";
 

function App() {
 
  return (
    <>
    <BrowserRouter>
     <Layout/>
    </BrowserRouter>
    </>
  )
}

export default App
