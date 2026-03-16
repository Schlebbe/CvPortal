import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* <!-- Logo --> */}

                    <NavLink to="/" className="text-lg font-semibold text-gray-900">
                        CV Portal
                    </NavLink>
                    {/* <!-- Desktop links --> */}
                    <div className="hidden md:flex space-x-8">
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            <span className="nav-text">Home</span>
                        </NavLink>
                        <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            <span className="nav-text">Portfolio</span>
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            <span className="nav-text">About</span>
                        </NavLink>
                        <NavLink to="/cv" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            <span className="nav-text">CV</span>
                        </NavLink>
                    </div>
                    {/* <!-- Mobile menu button --> */}
                    <button className={`md:hidden text-gray-700 text-xl`} onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </div>
            </div>
            {/* <!-- Mobile menu --> */}
            <div className={`${menuOpen ? "block" : "hidden"} md:hidden border-t border-gray-200 bg-white`}>
                <div className="px-4 py-3 space-y-2">
                    <NavLink to="/" className={({ isActive }) => `block nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}><span className="nav-text">Home</span></NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => `block nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}><span className="nav-text">Portfolio</span></NavLink>
                    <NavLink to="/about" className={({ isActive }) => `block nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}><span className="nav-text">About</span></NavLink>
                    <NavLink to="/cv" className={({ isActive }) => `block nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}><span className="nav-text">CV</span></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar