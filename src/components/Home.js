import React, { useState, useEffect } from 'react';
import TableData from './TableData'; // Adjust the import based on your file structure

export default function Home() {
  const [hasData, setHasData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/users');
        const data = await response.json();
        setHasData(data.length > 0);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Something's wrong in loading the data. Please refresh.</p>;
    }

    if (!hasData) {
      return (
        <>
          <div className="max-w-5xl w-full mt-8 drop-shadow-md overflow-hidden rounded-lg bg-white p-7">
            <h1 className='text-2xl text-center'>Seems like there is no data right now in the database. <br />
              <span className='text-blue-500'>Add something!</span>
            </h1>
            <div className='flex-1 items-center text-center mt-5'>
              <a href="/add" className="relative inline-flex items-center justify-center px-5 py-3 rounded-md text-white overflow-hidden text-sm font-medium bg-blue-500 hover:bg-white transition-all ease-in-out duration-350s border hover:border-blue-500">
                Add Someone
              </a>
            </div>
          </div>
        </>
      )
    }

    return (
      <div className="max-w-5xl w-full mt-8 drop-shadow-xl overflow-hidden rounded-lg bg-white">
        {/* HEADER */}
        <div className='flex items-center p-5 bg-indigo-900 flex-col md:flex-row'>
          <div className='flex-1 pb-4 md:pb-0'>
            <h1 className='text-white text-lg'>React CRUD Application with Search and Filter</h1>
          </div>
          <div className='flex-1 items-center text-right'>
            <a href="/add" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold">
                Add Someone
              </span>
            </a>
          </div>
        </div>

        {/* TABLE */}
        <div className="relative overflow-x-auto">
          <TableData />
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {renderContent()}
    </div>
  );
};
