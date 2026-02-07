import React from "react";

const History = () => {
  const dummyData = ["https://example.com", "WXYZ-1234", "Hello QR"];

  return (
    <div className="mt-10 w-96 bg-white bg-opacity-10 rounded-xl p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Scan History</h2>
      <ul className="space-y-2">
        {dummyData.map((item, index) => (
          <li
            key={index}
            className="bg-gray-800 bg-opacity-50 rounded-md p-2 hover:bg-purple-700 transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
