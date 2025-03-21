import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md p-8 mx-auto text-center bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="mb-6 text-6xl font-bold text-gray-800 dark:text-gray-200">404</h1>
        <h2 className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-300">Page Not Found</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Sorry, the page you are looking for is being analyzed by our mathematical algorithms and not available yet.
        </p>
        <Link href="/">
          <div className="inline-block px-6 py-3 text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Return to Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;