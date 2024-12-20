import React from 'react';

const AnalyzePage = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center font-poppins">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-40 h-40 rounded-full border-8 border-primary flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">85%</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold mt-6">Skills Match</h2>
      </div>
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-3/4 max-w-xl">
        <h3 className="text-lg font-semibold mb-4">Results</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>JavaScript</span>
            <span className="font-semibold text-primary">Matched</span>
          </li>
          <li className="flex justify-between">
            <span>React</span>
            <span className="font-semibold text-primary">Matched</span>
          </li>
          <li className="flex justify-between">
            <span>Tailwind CSS</span>
            <span className="font-semibold text-secondary">Partially Matched</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnalyzePage;
