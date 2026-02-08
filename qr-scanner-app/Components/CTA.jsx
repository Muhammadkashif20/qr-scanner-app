import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="w-full py-28 bg-gray-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px- text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-white mb-6"
        >
          Scan QR Codes <span className="text-cyan-400">The Smart Way</span>
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-white/60 max-w-2xl mx-auto mb-12 text-lg"
        >
          Fast. Secure. No clutter.  
          QRScan is built for people who value speed and privacy.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-12 py-4 rounded-xl
          bg-cyan-400 text-black font-semibold text-lg
          hover:bg-cyan-300 transition shadow-xl"
        >
          Start Scanning
        </motion.button>

      </div>
    </section>
  );
};

export default CTA;
