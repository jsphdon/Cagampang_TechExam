import '../index.css';
import React, { Component } from 'react';
import TableData from './TableData';

export default class Home extends Component {

  render() {
    return (
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full mt-8 drop-shadow-xl overflow-hidden sm:rounded-lg bg-white">

          {/* HEADER */}
          <div className='flex items-center p-5 bg-indigo-900 flex-col md:flex-row'>
            <div className='flex-1 pb-4 md:pb-0'>
              <h1 className='text-white text-lg'>CRUD - REACT EXAM</h1>
            </div>
            <div className='flex-1 items-center text-right'>
              <a href="/add" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold">
                  Add Record
                </span>
              </a>
            </div>
          </div>

          {/* TABLE */}
          <div className="relative overflow-x-auto">
            <TableData />
          </div>
        </div>
      </div>
    )
  }
}


