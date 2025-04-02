import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './commonComponents/Sidebar';
import { Navbar } from './commonComponents/Navbar';
import Analytics from './components/Analytics';
import CommingSoon from './components/CommingSoon';
import Profile from './components/Profile';

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
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<CommingSoon />} />
            </Routes>
          </div>
      </Router>
      </>
  )
}

export default App
