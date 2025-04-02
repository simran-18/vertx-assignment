import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './commonComponents/Sidebar';
import Dashboard from "./components/Dashboard";
import { Navbar } from './commonComponents/Navbar';
import Analytics from './commonComponents/Analytics';
import CommingSoon from './components/CommingSoon';

function App() {  
    return (
      <>
     <Navbar/>
      <Router>
        <Sidebar />
        <div className="flex-1 flex flex-col px-0 md:pl-64">
            <Routes>
              <Route path="/" element={<CommingSoon />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/connect" element={<CommingSoon />} />
              <Route path="/dealroom" element={<CommingSoon />} />
              <Route path="/activity" element={<CommingSoon />} />
            </Routes>
          </div>
      </Router>
      </>
  )
}

export default App
