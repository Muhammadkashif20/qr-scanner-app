import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Scan", "History"];

  return (
    <header className="w-full fixed top-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-white text-2xl font-bold"
        >
          {/* Replace with <img src="logo.png" /> if you have logo image */}
          <span className="text-cyan-400">QR</span>Scan
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white/80 font-medium">
          {navLinks.map((link) => (
            <motion.a 
              key={link}
              whileHover={{ scale: 1.1, color: "#38bdf8" }} // Sky blue accent
              className="transition cursor-pointer"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#38bdf8", color: "#000" }} // Sky blue hover
          className="hidden md:block px-6 py-2 rounded-xl border border-cyan-400/50 text-cyan-400 bg-cyan-500/10 font-semibold transition"
        >
          Start Scan
        </motion.button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a key={link} className="text-white font-medium hover:text-cyan-400 transition">{link}</a>
          ))}
          <button className="px-5 py-2 rounded-xl border border-cyan-400/50 text-cyan-400 bg-cyan-500/10 font-semibold hover:bg-cyan-500/20 hover:text-white transition">
            Start Scan
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
