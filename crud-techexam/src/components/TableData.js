import '../index.css';
import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import TableRowData from './TableRowData';
import FilterButtons from './FilterButtons';


function TableData() {
    const [users, setUsers] = useState([]);
    const [duplicateUsers, setDuplicateUsers] = useState([]);
    const [status, setStatus] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (users.length === 0) {
            fetch('http://localhost:8000/users').then(response => {
                return response.json();
            }).then(u => {
                setUsers(u);
                setDuplicateUsers(u)
            });
        } else {
            searchFilter();
        }
    }, [status, search])

    // SEARCH FILTER
    const onSearchChange = (event) => {
        let target = event.target.value;
        setSearch(target);
    }

    const menuStatus = [...new Set(users.map((stat) => stat.status))];


    // INACTIVE/ACTIVE FILTER
    const filterStatus = (curStat) => {
        const currentStatus = curStat === 1;
        setStatus(currentStatus);
    };

    // Search and Filter Function
    const searchFilter = () => {

        let newSearch = [];
        if (search === "") {
            newSearch = users;
        } else {
            const dupUsers = users.filter(unfilUsers => {
                return unfilUsers.name.toLowerCase().includes(search.toLowerCase());
            });
            newSearch = dupUsers;
        }
        if (status !== null) {
            const newStat = newSearch.filter((newStatus) => {
                return newStatus.status === status;
            });
            newSearch = newStat;
        }
        setDuplicateUsers(newSearch);

    }

    // Refresh Function
    const refresh = () => {
        setStatus(null);
        setSearch("");
    }

    return (
        <div>
            <div className='flex items-center'>
                <div className='flex-1 w-full'>
                    <SearchBox searchChange={onSearchChange} searchfield={search} />
                </div>
                <div className='flex text-right'>
                    <FilterButtons filterStatus={filterStatus} menuStatus={menuStatus} />
                    <div className='mt-4 mb-4'>
                        <button
                            onClick={() => refresh()}
                            className="overflow-hidden text-white bg-green-700 text-sm px-4 py-2 rounded-lg group mr-4 font-bold">
                            Refresh
                        </button>
                    </div>

                </div>
            </div>

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

                <TableRowData users={duplicateUsers} />

            </table>
        </div>

    )
}

export default TableData;


