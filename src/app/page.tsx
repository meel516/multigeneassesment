// src/App.js
import React, { Suspense } from 'react';


import EmployeeList from '../components/EmployeeList.jsx';
import EmployeeEditForm from "../components/EmployeeEditForm.jsx"
const App = () => {
 

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow rounded-lg p-4">
        <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 p-4 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-md">
  <nav className="flex flex-col space-y-2">
    <a
      href="#"
      className="flex items-center space-x-2 text-gray-800 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
    >
      <svg className="w-5 h-5 text-gray-500 hover:text-white transition-colors duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2M5 12l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2M3 6l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2" />
      </svg>
      <span>Dashboard</span>
    </a>
    <a
      href="#"
      className="flex items-center space-x-2 text-gray-800 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
    >
      <svg className="w-5 h-5 text-gray-500 hover:text-white transition-colors duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>Organisation</span>
    </a>
    <a
      href="#"
      className="flex items-center space-x-2 text-gray-800 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
    >
      <svg className="w-5 h-5 text-gray-500 hover:text-white transition-colors duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 11h16M4 15h16" />
      </svg>
      <span>Employees</span>
    </a>
    {/* Add more navigation items as needed */}
  </nav>
</div>

          <div className="col-span-9 h-dvh">
        
          <Suspense fallback={<div>...loading</div>}>
            
          <EmployeeList  />
          </Suspense>
                 
              
          </div>
          {/* <EmployeeEditForm/> */}
        </div>
      </div>
    </div>
  );
};

export default App;
