import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom"; 
import { AiOutlineQrcode } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Scan", path: "/scanner" },
    { name: "History", path: "/history" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-gray-900/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
     <motion.div 
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex items-center gap-2 text-2xl font-bold"
>
  {/* Logo Icon */}
   <AiOutlineQrcode className="w-8 h-8 text-cyan-400" />
  <h2 className="text-cyan-400">QR-
  <span className="highlight-text">Scanner</span>
  </h2>
</motion.div>



        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white/80 font-medium">
          {navLinks.map((link) => (
            <motion.div 
              key={link.name}
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              className="transition cursor-pointer"
            >
              <Link to={link.path}>{link.name}</Link>
            </motion.div>
          ))}
        </nav>

        {/* Action Button */}
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#38bdf8", color: "#000" }}
          className="hidden md:block"
        >
          <Link
            to="/scan"
            className="px-6 py-2 rounded-xl border border-cyan-400/50 text-cyan-400 bg-cyan-500/10 font-semibold transition"
          >
            Start Scan
          </Link>
        </motion.div>

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
          className="md:hidden bg-gray-900/80 backdrop-blur-md px-6 py-4 flex flex-col gap-4 rounded-b-2xl shadow-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white font-medium hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)} // Mobile menu close on click
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/scan"
            className="px-5 py-2 rounded-xl border border-cyan-400/50 text-cyan-400 bg-cyan-500/10 font-semibold hover:bg-cyan-500/20 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Start Scan
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
