"use client"
import { createEmployee } from '@/_utils/_api';
import EmployeeCard from './EmployeeCard';
import EmployeeEditForm from './EmployeeEditForm';

import { useState } from "react"

export default function EmployeeWrapper ({data}){
    const [open,setOpen] =useState(false)
    const [person,setPerson] =useState(null)
    const [method,setMethod] =useState("")
    
return <>
  <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
  <h1 className="text-3xl font-bold text-gray-800">{`Employees (${data.length})`}</h1>
  <div className="flex space-x-4">
    <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-500 hover:to-blue-700 transition-transform duration-300 ease-in-out">
      Import Employees
    </button>
    <button onClick={()=>{setOpen(true)
 setMethod('POST')

    }} className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:from-purple-500 hover:to-purple-700 transition-transform duration-300 ease-in-out">
      Add New Employee
    </button>
  </div>
</div>

      <div className='flex-1 overflow-scroll'>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full overflow-scroll w-2/3">
        {res.data.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
         
          />
        ))}
      </div>
      
      <EmployeeEditForm data={res.data}/> */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full overflow-scroll w-full">
        {data?.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            handleOpen ={()=>{
                setOpen(true)
            }}
            handleSet={()=>{
                setPerson(employee)
            }}
            setMethod ={(m)=>{
                setMethod(m)
            }}
         
          />
        ))}
      </div>
      <EmployeeEditForm open={open} handleClose ={()=>{
        setOpen(false) 
      }} data={person}
      methods={method}
      />

      </div>



</>

}