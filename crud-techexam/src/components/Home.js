import '../index.css';
import React from 'react';
import SearchBox from './SearchBox';


const Home = () => {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl w-full mt-8 drop-shadow-xl overflow-hidden sm:rounded-lg bg-white">

      {/* HEADER */}
      <div className='flex items-center p-5 bg-indigo-900'>
        <div className='flex-1'>
        <h1 className='text-white text-lg'>CRUD - TECH EXAM</h1>
        </div>
        <div className='flex-1 items-center text-right'>
          <a href="/add" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold">
                Add Record
            </span>
          </a>
        </div>
      </div>

      {/* SEARCH BOX and Filter*/}
      <div className='p-3'>
        <SearchBox/>
      </div>

      {/* TABLE */}
      <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-white ">
              <thead class="text-xs text-white uppercase bg-indigo-600">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Status
                      </th>
                      <th scope="col" class="px-6 py-3">
                          
                      </th>
                      <th scope="col" class="px-6 py-3">
                         
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="border-b dark:bg-indigo-800 dark:border-indigo-700 odd:bg-white even:bg-indigo-50 odd:dark:bg-indigo-800 even:dark:bg-indigo-700">
                      <th scope="row" class="px-6 py-4 font-bold text-indigo-900 dark:text-white whitespace-nowrap">
                          Apple MacBook Pro
                      </th>
                      <td class="px-6 py-4 ">
                      The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip.
                      </td>
                      <td class="px-6 py-4">
                          Laptop
                      </td>
                      <td class="px-6 py-4">
                          Active
                      </td>
                      <td class="px-5 py-4 text-right">
                          <a href="/" class="flex items-center justify-center px-4 py-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">View</a>
                          
                      </td>
                      <td class="px-5 py-4 text-right">
                          <a href="/" class="flex items-center justify-center px-4 py-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium">Edit</a>
                      </td>
                  </tr>
                  <tr class="border-b dark:bg-indigo-800 odd:bg-white even:bg-indigo-50 odd:dark:bg-indigo-800 even:dark:bg-indigo-700">
                      <th scope="row" class="px-6 py-4 font-bold text-indigo-900 dark:text-white whitespace-nowrap">
                          Apple MacBook Pro
                      </th>
                      <td class="px-6 py-4 ">
                      The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip.
                      </td>
                      <td class="px-6 py-4">
                          Laptop
                      </td>
                      <td class="px-6 py-4">
                          Active
                      </td>
                      <td class="px-5 py-4 text-right">
                          <a href="/" class="flex items-center justify-center px-4 py-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium">View</a>
                          
                      </td>
                      <td class="px-5 py-4 text-right">
                          <a href="/" class="flex items-center justify-center px-4 py-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium">Edit</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  </div>
  )
}

export default Home;
