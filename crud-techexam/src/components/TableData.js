import '../index.css';
import React, {Component, useEffect, useState} from 'react';
import TechExamService from "../services/techexam.service";
import SearchBox from './SearchBox';

function TableData() { 
    const [searchField, setSearchField] = useState("");
    const [user, setUser] = useState("");
    const [users, setUsers] = useState([]);
    

    const loadUsers = () => TechExamService.getAll().then((user) => setUsers(user.data));

    useEffect(() =>{
        loadUsers();
    }, []);

    const onSearchChange = (event) => {
        setSearchField({ searchfield: event.target.value })
      }

    return  (

        <div>
            
            <SearchBox searchChange={onSearchChange}/>
            
            <table className="w-full text-sm text-left text-white ">
                <thead className="text-xs text-white uppercase bg-indigo-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                {users.map((u) =>
                    <tr key={u.id} className="border-b dark:bg-indigo-800 dark:border-indigo-700 odd:bg-white even:bg-indigo-50 odd:dark:bg-indigo-800 even:dark:bg-indigo-700">
                    <th scope="row" className="px-6 py-4 font-bold text-indigo-900 dark:text-white whitespace-nowrap">
                        {u.name}
                    </th>
                    <td className="px-6 py-4 ">
                        {u.description}
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        Active
                    </td>
                    <td className="px-5 py-4 text-right">
                        <a href="/view/:id" className="flex items-center justify-center px-4 py-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">View</a>
                        
                    </td>
                    <td className="px-5 py-4 text-right">
                        <a href="/edit/:id" className="flex items-center justify-center px-4 py-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium">Edit</a>
                    </td>
                </tr>
                )}  
            </tbody>
                
            </table>
        </div>
        
    )
}

export default TableData;
