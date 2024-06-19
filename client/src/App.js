// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import ContactUs from './components/ContactUs';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard'

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* Add other routes as needed */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}




export default App;
