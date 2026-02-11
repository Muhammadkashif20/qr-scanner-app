import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import QrScanner from "qr-scanner";
import { AiOutlineUpload } from "react-icons/ai";
      import { FiUploadCloud } from "react-icons/fi";

const ScannerPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const scanner = new QrScanner(
      videoRef.current,
      (result) => console.log("QR Code detected:", result),
      { highlightScanRegion: true }
    );
    scanner.start();

    return () => {
      scanner.stop();
      scanner.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      <Header />

      {/* Scanner Section */}
      <section className="w-full flex-1 flex flex-col items-center justify-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-2xl"
        >
          {/* Left-Right Layout */}
          <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-6">

            {/* Camera Preview Box */}
            <div className="relative w-full md:w-1/2 h-80 md:h-96 bg-black/40 border border-white/20 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
              <span className="text-white/40 text-lg md:text-xl font-medium z-10 absolute top-4">
                Camera Preview
              </span>
              <video
                ref={videoRef}
                className="absolute w-full h-full object-cover rounded-2xl"
              />
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
              {/* Glowing Overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-cyan-400/20 shadow-[0_0_50px_rgba(8,145,178,0.3)]" />
            </div>

            {/* Drag & Drop Box */}

<motion.div
  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(8,145,178,0.4)" }}
  whileTap={{ scale: 0.97 }}
  className="w-full md:w-1/2 bg-gray-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
>
  <motion.div
    animate={{ y: [0, -12, 0], opacity: [1, 0.8, 1] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <FiUploadCloud className="text-cyan-400 w-16 h-16 mb-4" />
  </motion.div>
  <p className="text-white/50 text-center mb-1 font-medium">
    Drag & Drop QR File Here
  </p>
  <p className="text-white/40 text-center text-sm">
    Or click to browse files
  </p>
</motion.div>


          </div>

          {/* Scan Button Below Both */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(8,145,178,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full md:w-auto px-12 py-4 bg-cyan-400 text-black font-semibold rounded-2xl shadow-xl hover:bg-cyan-300 transition-all text-lg"
          >
            Scan QR Code
          </motion.button>

          {/* Hint Text */}
          <p className="mt-4 text-white/50 text-sm text-center max-w-xs">
            You can scan using camera or upload a QR code image file.
          </p>
        </motion.div>
      </section>

      {/* Instructions Section */}
      <section className="w-full bg-gray-950/80 py-16 px-6 flex flex-col items-center text-center mt-12 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How to Use
        </h2>
        <p className="text-white/60 max-w-lg">
          Open the scanner, point your camera at the QR code, or drag & drop a QR image.
          QRScan will detect it instantly. Safe, fast, and modern.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default ScannerPage;
