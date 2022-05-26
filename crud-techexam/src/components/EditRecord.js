import '../index.css';
import React, {useState, useEffect} from 'react'; 
import EndpointsService from "../services/endpoints.service";
import AsyncSelect from 'react-select/async';
import { Switch } from 'antd';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function EditRecord() {
  let history = useHistory();
  const successToast = ()=>{
    toast.success('Record UPDATED!')
}

  const {id} = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [status, setStatus] = useState(false);
  

  // handle selection
  const handleChange = value => {
    setCategory(value);
  };

  const fetchCategories = () =>{
    return fetch('http://localhost:8001/categories').then(res => {
      return res.json()
    })
  }

  const [state, setState] = useState({
    loading: false,
    users: {
      name: '',
      description: '',
      category: {},
      status: '',
    },
  });

  useEffect( () => {
    try{
      setState({...state, loading:true});
      async function getUser(){
        let res = await EndpointsService.getUser(id);
        setState({
          ...state,
          loading: false,
          users: res.data
        })
      }
      getUser();
    }catch(e){
      window.alert("Can't retrieve details")
    }
  }, [id])

// const editRecord = () => {
//   console.log(id);
//   console.log(name);
//   console.log(description);
//   console.log(category);
//   console.log(status);
// }

// EDIT Function
  const editRecord = async (event) => {
    var data = {
      name: name,
      description: description,
      category: category,
      status: status
    };
    event.preventDefault();
    try{
      let res = await EndpointsService.update(id, data);
      if(res){
        // window.alert("Record UPDATED!")
        successToast();
        history.push('/');
      }
    }catch(e){
      window.alert("Something went wrong")
      console.log(e);
    }
  }
  

  let {loading, users} = state;
  return (
    
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-grey"><span className='text-indigo-500'>Edit</span> Record</h2>
        </div>
        {/* <form className="mt-8 space-y-6 drop-shadow-xl overflow-hidden sm:rounded-md bg-white py-10 px-10" action="#" method="POST"> */}
        
        {
          loading ? <Loader/> : <div>
            {
        Object.keys(users).length > 0 &&
        <div className="form-group mt-8 space-y-6 drop-shadow-xl  sm:rounded-md bg-white py-10 px-10">
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
              rows={3}
              defaultValue={users.description}
              onChange={(e) => setDescription(e.target.value)}
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
            defaultValue={users.category}
            getOptionLabel={e => e.category_name}
            getOptionValue={e => e.id}
            loadOptions={fetchCategories}
            onChange={handleChange}
            />
        </div>

        {/* Toggle - Active/Inactive */}
        <div>
          <label htmlFor="Inactive/Active" className="block text-sm font-medium text-gray-700">
          {users.status ? <span>Active</span>: <span>Inactive</span>}
          </label>
          <Switch defaultValue={users.status} onChange={(e) => setStatus(!status)}/>
        </div>

        {/* Edit BUTTON */}
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-bold"
            onClick={editRecord}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Edit
          </button>
        </div>
        <div className='flex justify-center'>
          <a href='/home'>Back to Home</a>
        </div>
        </div>}
          </div>
        }
        
      </div>
    </div>

)
}

export default EditRecord;
