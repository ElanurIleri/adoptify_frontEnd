import React from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
     

       {/* Navbar */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

       
      <Sidebar />

      {/* Footer */}
      <Footer />
  </div>

  )
}

export default App