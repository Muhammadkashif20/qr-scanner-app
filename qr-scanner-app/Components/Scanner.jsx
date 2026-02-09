import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import QrScanner from "qr-scanner";
const ScannerPage = () => {
    const videoRef = useRef(null);
  useEffect(()=>{
    const scanner=new QrScanner(
      videoRef.current,
      (result)=>{
        console.log("QR Code detected:",result);
      },
      {highlightScanRegion:true}
    )
    scanner.start();
    return()=>{
      scanner.stop();
      scanner.destroy();
    }
  })
  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      <Header />

      <section className="w-full flex-1 flex items-center justify-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-2xl bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-2xl"
        >
          {/* Camera Preview Box */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 bg-black/40 border border-white/20 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
            <span className="text-white/40 text-lg md:text-xl font-medium z-10">
              Camera Preview
                 <video ref={videoRef} className="w-80 rounded-xl" />
            </span>

            {/* Scanner Corners */}
            <span className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-400" />
            <span className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-cyan-400" />
            <span className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-cyan-400" />
            <span className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-cyan-400" />

            {/* Animated Scan Line */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 280 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute left-4 right-4 h-[3px] bg-cyan-400/70 rounded-full"
            />

            {/* Optional glowing overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-cyan-400/20 shadow-[0_0_50px_rgba(8,145,178,0.3)]" />
          </div>

          {/* Scan Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(8,145,178,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-full md:w-auto px-10 py-4 bg-cyan-400 text-black font-semibold rounded-2xl shadow-xl hover:bg-cyan-300 transition-all text-lg"
          >
            Scan QR Code
          </motion.button>

          {/* Hint Text */}
          <p className="mt-4 text-white/50 text-sm text-center max-w-xs">
            Align your QR code inside the box to scan instantly.
          </p>
        </motion.div>
      </section>

      {/* Optional extra section for instructions */}
      <section className="w-full bg-gray-950/80 py-16 px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How to Use
        </h2>
        <p className="text-white/60 max-w-lg">
          Open the scanner, point your camera at the QR code, and let QRScan do the rest.
          You’ll see results instantly. Safe, fast, and modern.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default ScannerPage;
