import React from "react";

const Scanner = () => {
  return (
    <div className="bg-white bg-opacity-10 border-2 border-dashed border-white rounded-xl p-6 w-96 h-96 flex flex-col items-center justify-center mt-8 shadow-lg">
      <div className="w-64 h-64 bg-gray-800 bg-opacity-30 flex items-center justify-center rounded-lg">
        <span className="text-gray-300">Camera Preview</span>
      </div>
      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
        Scan QR Code
      </button>
    </div>
  );
};

export default Scanner;
