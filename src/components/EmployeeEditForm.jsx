'use client'
import React, { useEffect, useState } from 'react';
import { updateAction } from '@/actions.tsx/updateAction';
import { useFormStatus } from 'react-dom';
import { addEmployee } from '@/actions.tsx/addEmployee';

const EmployeeEditForm = ({open,handleClose,data,methods}) => {
  const [formData, setFormData] = useState(data?data:{

    "name": "",
    "avatar": "",
    "emailId": "",
    "mobile": "",
    "country": "",
    "state": "",
    "district": "",
    "id": "",
    "email": ""
    });
  console.log(formData,"babu")
  const {pending}=useFormStatus()
  console.log(pending,"bablu")
  useEffect(()=>{
setFormData(data)
  },[data])
  const updateEmployeeWithId = updateAction.bind(null, formData?.id)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    
  };
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    handleClose()
    }, 3000); // Adjust the timeout as needed
  };

    
  return (
   
    <div
    style={{
      display:`${open?"block":"none"}`
    }}
    className={`absolute z-10 top-0 right-0 w-1/3 h-full mx-auto bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold text-gray-800">Edit Employee</h2>
      <button
        className="text-red-500 text-2xl hover:text-red-700 transition-colors"
        onClick={handleClose}
      >
        &times;
      </button>
    </div>
  
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">General Information</label>
      <div className="flex items-center mb-4">
        <img
          aria-hidden="true"
          alt="Upload Avatar"
          src={`https://i.pravatar.cc/150?u=${typeof(formData?.id) === "string" ? formData?.id : ""}`}
          className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4"
        />
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 px-4 py-2 rounded-full shadow-md transition-transform duration-300 ease-in-out">Upload Avatar</button>
        <button className="text-gray-600 ml-4 hover:text-gray-800 transition-colors">Clear selected Image</button>
      </div>
      <span className="text-gray-500 text-xs">Please upload a .jpg or .png file with a minimum dimension of 400x400px not exceeding 5MB</span>
    </div>
  <form action={ async (formData)=>{ 
    try{
      let res
      if(methods=='PUT'){
    res =await updateEmployeeWithId(formData)}
    if(methods =='POST'){
res =await addEmployee(formData)
    }
    if(res="success"){
      showToast('This is a success toast notification!')
    }
  console.log(res,"omegle")
  }
    catch(err){
      console.log(err)
    }
    
    }} method={methods}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {[
        { label: 'Name *', name: 'name', type: 'text', value: formData?.name },
        { label: 'Email', name: 'emailId', type: 'email', value: formData?.emailId },
        { label: 'Country', name: 'country', type: 'text', value: formData?.country },
        { label: 'State', name: 'state', type: 'text', value: formData?.state },
        { label: 'Province', name: 'district', type: 'select', options: ['- Select -'], value: formData?.district },
        { label: 'Phone', name: 'mobile', type: 'text', value: formData?.mobile },
      ].map(({ label, name, type, options, value }, index) => (
        
        <div key={index} className="flex flex-col">
          <label className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
          {type === 'select' ? (
            <select
              name={name}
              className="border border-gray-300 rounded-lg p-2 w-full bg-white bg-opacity-70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
              value={value}
              onChange={handleChange}
            >
              {options.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              name={name}
              type={type}
              className="border border-gray-300 rounded-lg p-2 w-full bg-white bg-opacity-70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
              value={value}
              onChange={handleChange}
            />
          )}
        </div>
       
      ))}
    </div>
  
    <div className="flex justify-between mt-6">
      <button className="bg-gray-300 text-gray-800 hover:bg-gray-400 px-4 py-2 rounded-full shadow-md transition-transform duration-300 ease-in-out">Cancel</button>
      <button
          type="submit"
          className={`bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center ${pending ? 'cursor-not-allowed' : 'hover:from-green-600 hover:to-green-800'}`}
          disabled={pending}
        >
          {pending ? (
            <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          ) : (
            'Submit'
          )}
        </button></div>
    </form>
    {toast.show && (
        <div className="fixed top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-700 text-white px-6 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out animate-slideIn">
          {toast.message}
        </div>
      )}
  </div>
  
  );
};

export default EmployeeEditForm;
