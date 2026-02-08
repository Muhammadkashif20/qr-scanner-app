import React from "react";
import { AiOutlineLink, AiOutlineQrcode } from "react-icons/ai";

const History = () => {
  const dummyData = [
    { type: "URL", value: "https://example.com", date: "2026-02-08 10:30 AM" },
    { type: "Code", value: "WXYZ-1234", date: "2026-02-08 09:15 AM" },
    { type: "Text", value: "Hello QR", date: "2026-02-07 08:45 PM" },
    { type: "URL", value: "https://openai.com", date: "2026-02-07 07:20 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 px-6">
      {/* Page Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 text-center md:text-left">
        Scan History
      </h2>

      {/* History Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {dummyData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-5 rounded-2xl bg-gray-900/50 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 hover:border-cyan-400/60 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              {item.type === "URL" && <AiOutlineLink className="text-cyan-400 w-7 h-7" />}
              {(item.type === "Code" || item.type === "Text") && (
                <AiOutlineQrcode className="text-cyan-400 w-7 h-7" />
              )}
              <div>
                <p className="text-white font-semibold text-lg truncate">{item.value}</p>
                <p className="text-white/50 text-sm">{item.date}</p>
              </div>
            </div>

            <button className="mt-2 self-start px-5 py-1 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/20 transition">
              Copy
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {dummyData.length === 0 && (
        <p className="text-white/50 text-center mt-20">
          No scans available yet. Start scanning now!
        </p>
      )}
    </div>
  );
};

export default History;
