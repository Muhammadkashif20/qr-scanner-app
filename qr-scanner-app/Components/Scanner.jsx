import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";

const ScannerPage = () => {
  return (
    <div>
      <Header />
      <section className="w-full min-h-screen bg-gray-950 flex items-center justify-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl"
        >
          {/* Camera Preview */}
          <div className="w-80 h-80 md:w-96 md:h-96 bg-black/40 border border-white/20 rounded-2xl flex items-center justify-center shadow-inner">
            <span className="text-white/40 text-lg md:text-xl font-medium">
              Camera Preview
            </span>
          </div>

          {/* Scan Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-10 py-4 bg-cyan-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-cyan-300 transition"
          >
            Scan QR Code
          </motion.button>

          {/* Hint Text */}
          <p className="mt-4 text-white/50 text-sm text-center max-w-xs">
            Align your QR code inside the box to scan instantly.
          </p>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default ScannerPage;
