import '../index.css';
// import React, {useEffect, useState} from 'react'; 
import React, {useEffect, useState} from 'react'; 
import EndpointsService from "../services/endpoints.service";

function CategoryDropDown() {
  
    return (
<>
    {/* Dropdown */}
    <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
        </label>
        <select
            id="category"
            name="category"
            autoComplete="category-name"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
        </select>
    </div>
</>
    
    )

}

export default CategoryDropDown;
