// src/components/EmployeeCard.js
'use client';
import { deleteAction } from '@/actions.tsx/deleteAction';
import React, { useState } from 'react';


const EmployeeCard = ({ employee,handleOpen,handleSet,setMethod }) =>

    {
        const [some,SetSome] =useState(false)
        const onEdit = (employee) => {
            // Handle edit logic
          };
        
          const onDelete = (id) => {
            // Handle delete logic
          };
        

        console.log(employee,"red")
      return  (
        <>
<div
  className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
  onClick={() => {
 
  }}
>
  <img
    className="w-20 h-20 rounded-full border-4 border-blue-500 mb-4 transition-transform transform hover:scale-110"
    src={`https://i.pravatar.cc/150?u=${typeof(employee.id) === "string" ? employee.id : ""}`}
    alt={employee.name}
  />
  <h2 className="text-xl font-bold text-gray-800 mb-1 text-center">{typeof(employee.name) === "string" ? employee.name : ""}</h2>
  <p className="text-sm text-gray-600 mb-1 text-center">{employee.country}</p>
  <p className="text-sm text-gray-700 mb-3 text-center">{employee.emailId}</p>
  <div className="flex space-x-4 mt-auto">
    <button
      onClick={(e) => {
        e.stopPropagation();
        onEdit(employee);
        handleOpen();
        handleSet();
       setMethod('PUT')
      }}
      className="bg-white bg-opacity-50 backdrop-blur-md border border-gray-300 text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-opacity-70 transform transition-transform duration-300 ease-in-out"
    >
      Edit
    </button>
    <form action={async ()=>{

try{
let res =await deleteAction(employee.id)
}
catch(err){

}
    }} method='DELETE'>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDelete(employee.id);
       
      }}
      className="bg-white bg-opacity-50 backdrop-blur-md border border-gray-300 text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-opacity-70 transform transition-transform duration-300 ease-in-out"
    >
      Delete
    </button>
    </form>
  </div>
</div>

  </>

);
    }
export default EmployeeCard;
