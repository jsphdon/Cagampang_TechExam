import '../index.css';
import React, { useState } from 'react';
import EndpointsService from "../services/endpoints.service";
import { Switch } from 'antd';
import { useHistory } from "react-router-dom";
import AsyncSelect from 'react-select/async';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddSomeone() {
  let history = useHistory();

  // Toast Notification (Success)
  const successNotify = () => toast.success('Record ADDED!', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  // Toast Notification (Failed)
  const failNotify = () => toast.error('Something went wrong', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState(false);


  // handle selection
  const handleChange = value => {
    setCategory(value);
  };

  const fetchCategories = () => {
    return fetch('http://localhost:8001/categories').then(res => {
      return res.json()
    })
  }

  const add = async (event) => {
    let data = {
      name: name,
      description: description,
      category: category,
      status: status
    };
    event.preventDefault();
    try {
      let res = await EndpointsService.create(data);
      if (res) {
        successNotify();
        history.push('/');
      }
    } catch (e) {
      failNotify();
      console.log(e);
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-grey"><span className='text-indigo-500'>Add</span> Someone</h2>

        </div>
        <form className="form-group mt-8 space-y-6 drop-shadow-xl  sm:rounded-md bg-white py-10 px-10" onSubmit={add}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="font-sans block text-md font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
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
                required
                rows={3}
                className="form-control shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                onChange={(e) => setDescription(e.target.value)}

              />
            </div>
          </div>

          {/* Dropdown */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <AsyncSelect
              cacheOptions
              defaultOptions
              value={category}
              getOptionLabel={e => e.category_name}
              getOptionValue={e => e.id}
              loadOptions={fetchCategories}
              onChange={handleChange}
            />
          </div>

          {/* Toggle - Active/Inactive */}
          <div>
            {/* <label htmlFor="Inactive/Active" className="block text-sm font-medium text-gray-700">
          {status ? <span>Active</span> : <span>Inactive</span>}
          </label>
          <Switch 
          onChange={() => setStatus(!status)}
          /> */}
            <Switch checkedChildren="Active" unCheckedChildren="Inactive" onChange={() => setStatus(!status)} />
          </div>

          {/* ADD BUTTON */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-bold"

            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              {' '}
              Add
            </button>
          </div>
          <div className='flex justify-center'>
            <a href='/home'>Back to Home</a>
          </div>
        </form>

      </div>
    </div>

  )

}

export default AddSomeone;
