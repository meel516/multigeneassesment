// src/components/EmployeeList.js

import React  from 'react';
import EmployeeCard from './EmployeeCard';
import { getAllEmployees } from '../_utils/_api.js';
import EmployeeEditForm from './EmployeeEditForm';
import EmployeeWrapper from "./EmployeeWrapper"


const  EmployeeList =  async () => {
  
 
  // const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   getAllEmployees().then((response) =>
  //   {
  //     console.log(response,"saleem")
  //     setEmployees(response.data)});
  // }, []);

let res =await getAllEmployees()
  return (
    <div className="p-4 h-full flex flex-col">
      {/* <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
  <h1 className="text-3xl font-bold text-gray-800">{`Employees (${res.data.length})`}</h1>
  <div className="flex space-x-4">
    <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-500 hover:to-blue-700 transition-transform duration-300 ease-in-out">
      Import Employees
    </button>
    <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:from-purple-500 hover:to-purple-700 transition-transform duration-300 ease-in-out">
      Add New Employee
    </button>
  </div>
</div> */}

      {/* <div className='flex-1 overflow-scroll'> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full overflow-scroll w-2/3">
        {res.data.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
         
          />
        ))}
      </div>
      
      <EmployeeEditForm data={res.data}/> */}
<EmployeeWrapper data={res.data}/>
      {/* </div> */}
      {/* <div className="flex justify-between items-center mt-4">
        <button className="text-blue-500">Previous</button>
        <div className="flex space-x-1">
          {Array.from({ length: 10 }, (_, i) => (
            <button key={i} className="text-blue-500">
              {i + 1}
            </button>
          ))}
        </div>
        <button className="text-blue-500">Next</button>
      </div> */}
    </div>
  );
};

export default EmployeeList;
