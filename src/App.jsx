import './App.css'
import {lazy,Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './commonComponents/Sidebar';
import { Navbar } from './commonComponents/Navbar';
import Loader from './commonComponents/Loader';

// Lazy-loaded components
const Analytics = lazy(() => import('./components/Analytics'));
const Profile = lazy(() => import('./components/Profile'));
const CommingSoon = lazy(() => import('./components/CommingSoon'));

function App() {  
    return (
      <>
     <Navbar/>
      <Router>
        <Sidebar />
        <div className="flex-1 flex flex-col px-0 md:pl-64">
        <Suspense fallback={<div className="text-center text-white mt-10"><Loader/></div>}>
            <Routes>
              <Route path="/" element={<CommingSoon />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/connect" element={<CommingSoon />} />
              <Route path="/dealroom" element={<CommingSoon />} />
              <Route path="/activity" element={<CommingSoon />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<CommingSoon />} />
            </Routes>
        </Suspense>
          </div>
      </Router>
      </>
  )
}

export default App
