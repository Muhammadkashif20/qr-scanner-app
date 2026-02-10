import React from "react";
import { motion } from "framer-motion";
import { FiCamera, FiZap, FiCheckCircle } from "react-icons/fi";

const WorkDetail = () => {
  const steps = [
    {
      icon: <FiCamera />,
      title: "Open Scanner",
      desc: "Launch the QRScan app and open the scanner instantly."
    },
    {
      icon: <FiZap />,
      title: "Scan QR Code",
      desc: "Point your camera at any QR code to scan it quickly."
    },
    {
      icon: <FiCheckCircle />,
      title: "Get Result",
      desc: "View the scanned result and take action immediately."
    }
  ];

  return (
    <section className="w-full py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How It <span className="text-cyan-400">Works</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-lg">
            Scan QR codes in just three simple and fast steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, boxShadow: "0px 12px 25px rgba(0, 203, 213, 0.25)" }}
              transition={{ duration: 0.4 }}
              className="text-center p-8 rounded-2xl bg-gray-900/40 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-3xl mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkDetail;
