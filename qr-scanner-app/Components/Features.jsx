import React from "react";
import { motion } from "framer-motion";
import { FiCamera, FiClock, FiShield } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiCamera />,
      title: "Instant QR Scanning",
      desc: "Scan QR codes instantly with high accuracy and smooth performance."
    },
    {
      icon: <FiClock />,
      title: "Scan History",
      desc: "Automatically save your scanned codes and access them anytime."
    },
    {
      icon: <FiShield />,
      title: "Secure & Private",
      desc: "No data tracking. Your scans stay private and protected."
    }
  ];

  return (
    <section className="w-full bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose <span className="text-cyan-400">QRScan</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Designed for speed, security, and simplicity — everything you need in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/60 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md"
            >
              <div className="text-cyan-400 text-4xl mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
