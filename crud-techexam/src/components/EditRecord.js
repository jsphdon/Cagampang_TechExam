import '../index.css';
import React, {Component} from 'react'; 
import EndpointsService from "../services/endpoints.service";
// import AsyncSelect from 'react-select/async';
// import { Switch } from 'antd';

function EditRecord(){
  
  // const [inputValue, setValue] = useState('');
  // const [selectedValue, setSelectedValue] = useState(null);

  // // handle input change event
  // const handleInputChange = value => {
  //   setValue(value);
  // };

  // // handle selection
  // const handleChange = value => {
  //   setSelectedValue(value);
  // }

  // const fetchData = () => {
  //   return  fetch('http://localhost:8000/categories').then(res => {
  //     return res.json()
  //   })
  // }
    
    return (

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-grey"><span className='text-indigo-500'>Edit</span> Record</h2>
            
          </div>
          <div className="form-group mt-8 space-y-6 drop-shadow-xl overflow-hidden sm:rounded-md bg-white py-10 px-10">
          {/* Name */}
          <div>
            <label htmlFor="name" className="font-sans block text-md font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              // value={this.state.name}
              // onChange={this.onChangeName}
              autoComplete="given-name"
              className="form-control mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>  

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="form-control shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                // defaultValue={''}
                // value={this.state.description}
                // onChange={this.onChangeDescription}
              />
            </div>
          </div>

          {/* Dropdown */}
          {/* <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <AsyncSelect
              cacheOptions
              defaultOptions
              value={selectedValue}
              getOptionLabel={e => e.personality_name}
              getOptionValue={e => e.id}
              loadOptions={fetchData}
              onInputChange={handleInputChange}
              onChange={handleChange}/>
          </div> */}

          {/* Toggle - Active/Inactive */}
          {/* <div>
            <label htmlFor="Inactive/Active" className="block text-sm font-medium text-gray-700">
            {toggle ? <span>Active</span>: <span>Inactive</span>}
            </label>
            <Switch onClick={toggler}/>
          </div> */}

          {/* ADD BUTTON */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-bold"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Edit
            </button>
          </div>
          <div className='flex justify-center'>
            <a href='/home'>Back to Home</a>
          </div>
          </div>
          
        </div>
      </div>

  )  
}

export default EditRecord;
