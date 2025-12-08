// fyp-client/src/pages/Catalogues.jsx
import React from "react";

const catalogues = [
  { batch: "16SW", title: "Batch 16SW - Final Year Projects (2016-2020)" },
  { batch: "17SW", title: "Batch 17SW - Final Year Projects (2017-2021)" },
  { batch: "18SW", title: "Batch 18SW - Final Year Projects (2018-2022)" },
  { batch: "19SW", title: "Batch 19SW - Final Year Projects (2019-2023)" },
  { batch: "20SW", title: "Batch 20SW - Final Year Projects (2020-2024)" },
  { batch: "21SW", title: "Batch 21SW - Final Year Projects (2021-2025)" },
  // Add more batches here in future
];

const Catalogues = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            FYP Catalogues
          </h1>
          <p className="text-lg text-gray-600">
            View and download Final Year Project reports from previous batches
          </p>
        </div>

        {/* Grid of Catalogues */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogues.map((item) => (
            <div
              key={item.batch}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 text-center">
                <h2 className="text-4xl font-bold">{item.batch}</h2>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
                  {item.title}
                </h3>

                <div className="flex justify-center gap-4">
                  <a
                    href={`/catalogues/${item.batch}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
                  >
                    View PDF
                  </a>
                  <a
                    href={`/catalogues/${item.batch}.pdf`}
                    download
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition shadow-md"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 text-gray-500">
          <p>New catalogues will be added after each batch completion.</p>
        </div>
      </div>
    </div>
  );
};

export default Catalogues;
