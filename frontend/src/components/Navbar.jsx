import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    // State to simulate user login status
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    // State to control sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggles the sidebar's visibility
    const toggleSidebar = () => {
        if (isLoggedIn) {
            setIsSidebarOpen(!isSidebarOpen);
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-white/10 border-b border-white/20 backdrop-filter shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-3">
                    {/* Logo and Sidebar Toggle */}
                    <div className="flex items-center space-x-4">
                        {isLoggedIn && (
                            <button onClick={toggleSidebar} className="text-white text-xl">
                                <FaBars />
                            </button>
                        )}
                        <Link to="/" className="text-2xl font-bold text-gradient cursor-pointer">
                            HealthCure
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex space-x-12 text-white font-medium">
                        <Link to="/">Home</Link>
                        <a href="#dashboard">Dashboard</a>
                        <a href="#doctors">Doctors</a>
                        <a href="#appointment">Appointment</a>
                        <a href="#community">Community</a>
                    </div>

                    {/* Buttons or Search Bar (Conditional Rendering) */}
                    <div className="flex space-x-4 items-center">
                        {isLoggedIn ? (
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-4 py-2 pl-10 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                />
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="px-4 py-2 rounded-2xl bg-white/20 border border-white/30 text-white hover:bg-white/30 transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 rounded-2xl bg-white/20 border border-white/30 text-white hover:bg-white/30 transition"
                                >
                                    Signup
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Sidebar component (conditionally rendered) */}
            {isLoggedIn && isSidebarOpen && (
                <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-40">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gradient">Menu</h3>
                            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
                                <FaTimes />
                            </button>
                        </div>
                        <ul className="space-y-4">
                            <li><Link to="/profile" className="block py-2 hover:bg-gray-800 rounded">Profile</Link></li>
                            <li><Link to="/reports" className="block py-2 hover:bg-gray-800 rounded">Reports</Link></li>
                            <li><Link to="/appointments" className="block py-2 hover:bg-gray-800 rounded">My Appointments</Link></li>
                            <li><Link to="/settings" className="block py-2 hover:bg-gray-800 rounded">Settings</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
