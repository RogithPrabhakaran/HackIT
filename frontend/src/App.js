import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';

import MoodTrackerGraph from './components/moodTrackerGraph';
import ChatRoom from './components/chatRoom';
import Chatting from './components/chatting';
import DashBoard from './components/dashboard';

import Resource from './components/resource';
import Campaigns from './components/campains';




const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Addiction Recovery App</h1>

      
      <div className="space-x-4">

      <Link to="/login" className="hover:underline hover:text-blue-200 transition duration-300">Login</Link>

        

        <Link to="/signup" className="hover:underline hover:text-blue-200 transition duration-300">Signup</Link>
        <Link to="/dashboard" className="hover:underline hover:text-blue-200 transition duration-300"> DashBoard</Link>

        
        <Link to="/community-chat" className="hover:underline hover:text-blue-200 transition duration-300">ChatRoom</Link>
        <Link to="/community-resource" className="hover:underline hover:text-blue-200 transition duration-300">Resources</Link>
        <Link to="/campaingns-make" className="hover:underline hover:text-blue-200 transition duration-300"> Campaigns </Link>



      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/community-chat" element={<ChatRoom />} />
            <Route path="/chatroom/:roomID" element={<Chatting />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/community-resource" element={<Resource />} />
            <Route path="/campaingns-make" element={<Campaigns />} />
            <Route
              path="/"
              element={
                <div className="text-center mt-10">
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome to the Addiction Recovery App</h2>
                  <p className="text-gray-700">Join our community to find support and resources for recovery.</p>
                </div>
              }
            />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;