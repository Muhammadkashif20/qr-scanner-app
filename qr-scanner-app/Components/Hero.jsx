import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Scan <span className="text-cyan-400">QR Codes</span> Instantly
          </motion.h1>

          <motion.p
            className="text-white/70 text-lg md:text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Quickly scan and manage your QR codes with our professional and modern interface.
          </motion.p>

          <motion.button
            className="px-8 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            Start Scanning
          </motion.button>
        </div>

        {/* Right Side: Illustration / Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Replace this div with an actual image */}
          <div className="w-80 h-80 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
            QR Image
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
