import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';

import MoodTrackerGraph from './components/moodTrackerGraph';
import ChatRoom from './components/chatRoom';
import Chatting from './components/chatting';
import DashBoard from './components/dashboard';


const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Addiction Recovery App</h1>

      <div>
        <Link to="/signup" className="mr-4 hover:underline">Signup</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/" className="ml-4 hover:underline">Home</Link>

      <div className="space-x-4">
        <Link to="/signup" className="hover:underline hover:text-blue-200 transition duration-300">Signup</Link>
        <Link to="/login" className="hover:underline hover:text-blue-200 transition duration-300">Login</Link>
        <Link to="/community-chat" className="hover:underline hover:text-blue-200 transition duration-300">ChatRoom</Link>
        <Link to="/dashboard" className="hover:underline hover:text-blue-200 transition duration-300"> DashBoard</Link>

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

            <Route path="/" element={<MoodTrackerGraph/>} />

            <Route path="/community-chat" element={<ChatRoom />} />
            <Route path="/chatroom/:roomID" element={<Chatting />} />
            <Route path="/dashboard" element={<DashBoard />} />
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