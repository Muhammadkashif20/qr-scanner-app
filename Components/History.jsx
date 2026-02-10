import React from "react";
import { AiOutlineLink, AiOutlineQrcode } from "react-icons/ai";
import Header from "./Header";
import Footer from "./Footer";

const History = () => {
  const dummyData = [
    { type: "URL", value: "https://example.com", date: "2026-02-08 10:30 AM" },
    { type: "Code", value: "WXYZ-1234", date: "2026-02-08 09:15 AM" },
    { type: "Text", value: "Hello QR", date: "2026-02-07 08:45 PM" },
    { type: "URL", value: "https://openai.com", date: "2026-02-07 07:20 PM" },
    { type: "Code", value: "ABCD-5678", date: "2026-02-06 05:00 PM" },
    { type: "Text", value: "Sample QR Text", date: "2026-02-05 11:30 AM" },
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-28 px-6">
        {/* Centered Page Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">
          Scan History
        </h2>

        {/* Scrollable History Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="history-scroll flex flex-col gap-5 max-h-[70vh] overflow-y-auto pr-2 pb-12
                          scrollbar-thin scrollbar-thumb-cyan-700/60 scrollbar-track-gray-950/50">
            {dummyData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-3xl 
                           bg-gray-900/40 backdrop-blur-lg border border-white/10 shadow-md transition-all duration-200"
              >
                {/* Icon + Info */}
                <div className="flex items-center gap-4 w-full md:w-3/4">
                  {item.type === "URL" && <AiOutlineLink className="text-cyan-400 w-7 h-7" />}
                  {(item.type === "Code" || item.type === "Text") && (
                    <AiOutlineQrcode className="text-cyan-400 w-7 h-7" />
                  )}

                  <div className="flex flex-col w-full">
                    <p className="text-white font-semibold text-lg truncate">{item.value}</p>
                    <p className="text-white/50 text-sm">{item.date}</p>
                  </div>
                </div>

                {/* Copy Button */}
                <button className="mt-3 md:mt-0 self-start md:self-auto px-5 py-1 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/20 transition">
                  Copy
                </button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {dummyData.length === 0 && (
            <p className="text-white/50 text-center mt-20 text-lg">
              No scans available yet. Start scanning now!
            </p>
          )}
        </div>
      </main>

      {/* Footer with spacing */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default History;
