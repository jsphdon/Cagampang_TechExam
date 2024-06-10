import '../index.css';
import React, { useState, useEffect } from 'react';
import EndpointsService from "../services/endpoints.service";
import AsyncSelect from 'react-select/async';
import { Switch } from 'antd';
import { useHistory, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditSomeone() {
  let history = useHistory();
  const successNotify = () => toast.success('Record UPDATED!', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const failNotify = () => toast.error('Something went wrong', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const { id } = useParams();


  // handle category
  const handleCategory = value => {
    console.log(value)
    setUsers({
      ...users,
      category: value.value
    });

  };

  // handle status
  const handleStatus = value => {
    console.log(value)
    setUsers({
      ...users,
      status: value
    });
  };


  const fetchCategories = () => {
    return fetch('http://localhost:8001/categories').then(res => {
      return res.json()
    })
  }

  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState({
    id: '',
    name: '',
    description: '',
    category: '',
    status: ''
  });

  useEffect(() => {
    try {
      setLoading(true);
      async function getUser() {
        let res = await EndpointsService.getUser(id);
        setLoading(false);
        setUsers(res.data);
      }

      getUser();
    } catch (e) {
      window.alert("Can't retrieve details")
    }
  }, [id])

  // EDIT Function
  const edit = async (event) => {
    let data = {
      name: users.name,
      description: users.description,
      category: users.category,
      status: users.status
    };

    event.preventDefault();
    try {
      let res = await EndpointsService.update(id, data);
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-grey"><span className='text-indigo-500'>Edit</span> {users.name}</h2>
        </div>

        <div className="form-group mt-8 space-y-6 drop-shadow-xl  sm:rounded-md bg-white py-10 px-10" >
          {/* Name */}
          <div>
            <label htmlFor="name" className="font-sans block text-md font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={users.name}
              onChange={(e) => setUsers({
                ...users,
                name: e.target.value
              })}
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
                defaultValue={users.description}
                onChange={(e) => setUsers({
                  ...users,
                  description: e.target.value
                })}
                className="form-control shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"

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
              value={users.category}
              getOptionLabel={e => e.category_name}
              getOptionValue={e => e.id}
              loadOptions={fetchCategories}
              onChange={handleCategory}
            />
          </div>

          {/* Toggle - Active/Inactive */}
          <div>
            <Switch checkedChildren="Active" unCheckedChildren="Inactive" checked={users.status} onChange={handleStatus} />
            <br />
          </div>

          {/* Edit BUTTON */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-bold"
              onClick={edit}
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

export default EditSomeone;
