import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gray-950 flex items-center py-24">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Scan <span className="text-cyan-400">QR Codes</span> Effortlessly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl"
          >
            Fast, clean, and secure QR scanning experience.<br/> Just align the code and go.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-semibold text-lg shadow-lg hover:bg-cyan-300 transition mt-4"
          >
            Start Scanning
          </motion.button>
        </div>

        {/* RIGHT SIDE - SCANNER MOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden">

            {/* Scanner corners */}
            <span className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-400" />
            <span className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-cyan-400" />
            <span className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-cyan-400" />
            <span className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-cyan-400" />

            {/* Animated scan line */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 240 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="absolute left-6 right-6 h-[2px] bg-cyan-400/80"
            />

            {/* QR hint text */}
            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm font-medium">
              Place QR code here
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
