import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import MoodTrackerGraph from './components/moodTrackerGraph';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Addiction Recovery App</h1>
      <div>
        <Link to="/signup" className="mr-4 hover:underline">Signup</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/" className="ml-4 hover:underline">Home</Link>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MoodTrackerGraph/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
