import React from "react";
import { AiOutlineQrcode } from "react-icons/ai";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            <div className="flex space-x-2">
               <AiOutlineQrcode className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white mb-3 highlight-text">
              QR-<span className="text-cyan-400">Scanner</span>
            </h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A modern and secure QR code scanner built for speed,
              simplicity, and privacy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/scanner" className="hover:text-cyan-400 transition">
                  Scan
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-cyan-400 transition">
                  History
                </Link>
              </li>
              {/* <li>
                <Link to="/privacy" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link
                to="/"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-cyan-400/40 transition"
              >
                <FiGithub />
              </Link>
              <Link
                to="/"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-cyan-400/40 transition"
              >
                <FiLinkedin />
              </Link>
              <Link
                to="/"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-cyan-400/40 transition"
              >
                <FiTwitter />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
     <div className="border-t border-white/10 pt-6 text-center text-white/50 text-sm">
  © 2026 QRScan. All rights reserved. <br />
  Created by <span className="text-cyan-400 font-medium">M.Kashif</span>
</div>


      </div>
    </footer>
  );
};

export default Footer;
