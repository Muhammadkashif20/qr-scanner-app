import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-cyan-500/10 via-gray-950 to-gray-950">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to <span className="text-cyan-400">Scan Smarter?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 max-w-xl mx-auto mb-10"
        >
          Start scanning QR codes faster, safer, and smarter with QRScan today.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-semibold text-lg shadow-lg hover:bg-cyan-300 transition"
        >
          Start Scanning Now
        </motion.button>

      </div>
    </section>
  );
};

export default CTA;
