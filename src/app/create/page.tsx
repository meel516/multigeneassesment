// 'use client'
// import React, { useState } from 'react';
// import classNames from 'classnames';

// const EmployeeEditForm = () => {
//   const [formData, setFormData] = useState({
//     employeeId: 'CC156',
//     firstName: 'Kristen',
//     lastName: 'Kish',
//     dob: '',
//     preferredName: 'English',
//     email: 'kristenjkish@cupcake.com',
//     address: '52/71 Dharamara Koil Street, Madipakkam - Chennai 42',
//     city: 'Chennai',
//     province: '',
//     postalCode: '600042',
//     phone: '(+91) 963 254 3256',
//     jobTitle: 'Store Manager',
//     dateOfHire: '',
//     workRefNumber: '',
//     occupationGroup: '',
//     department: '',
//     division: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
    
//   };
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const openDrawer = () => setIsDrawerOpen(true);
//   const closeDrawer = () => setIsDrawerOpen(false);
    
//   return (
   
//     <div className="slide-right bg-background bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto ">
//       <h2 className="text-2xl font-semibold mb-4">Edit Employee</h2>
      
//       <div className="mb-6">
//         <label className="block text-sm font-medium mb-2">General Information</label>
//         <div className="flex items-center mb-2">
//           <img aria-hidden="true" alt="Upload Avatar" src="https://placehold.co/100x100" className="rounded-full mr-4" />
//           <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded transition-colors">Upload Avatar</button>
//           <button className="text-muted-foreground ml-4 hover:text-muted/80 transition-colors">Clear selected Image</button>
//         </div>
//         <span className="text-muted-foreground text-xs">Please upload a .jpg or .png file with a minimum dimension of 400x400px not exceeding 5MB</span>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         {[
//           { label: 'Employee Id *', name: 'employeeId', type: 'text', value: formData.employeeId },
//           { label: 'First Name *', name: 'firstName', type: 'text', value: formData.firstName },
//           { label: 'Last Name *', name: 'lastName', type: 'text', value: formData.lastName },
//           { label: 'Date of Birth', name: 'dob', type: 'date', value: formData.dob },
//           { label: 'Preferred Name', name: 'preferredName', type: 'select', options: ['English'], value: formData.preferredName },
//           { label: 'Email', name: 'email', type: 'email', value: formData.email },
//           { label: 'Address', name: 'address', type: 'text', value: formData.address },
//           { label: 'City', name: 'city', type: 'text', value: formData.city },
//           { label: 'Province', name: 'province', type: 'select', options: ['- Select -'], value: formData.province },
//           { label: 'Postal Code', name: 'postalCode', type: 'text', value: formData.postalCode },
//           { label: 'Phone', name: 'phone', type: 'text', value: formData.phone },
//           { label: 'Job Title / Occupation *', name: 'jobTitle', type: 'select', options: ['Store Manager'], value: formData.jobTitle },
//           { label: 'Date of Hire', name: 'dateOfHire', type: 'date', value: formData.dateOfHire },
//           { label: 'Work Reference Number', name: 'workRefNumber', type: 'select', options: ['- Select -'], value: formData.workRefNumber },
//           { label: 'Occupation Group', name: 'occupationGroup', type: 'select', options: ['- Select -'], value: formData.occupationGroup },
//           { label: 'Department', name: 'department', type: 'select', options: ['- Select -'], value: formData.department },
//           { label: 'Division', name: 'division', type: 'select', options: ['- Select -'], value: formData.division },
//         ].map(({ label, name, type, options, value }, index) => (
//           <div key={index} className="flex flex-col">
//             <label className="block text-sm font-medium mb-1">{label}</label>
//             {type === 'select' ? (
//               <select
//                 name={name}
//                 className="border border-border rounded p-2 w-full"
//                 value={value}
//                 onChange={handleChange}
//               >
//                 {options.map((option, idx) => (
//                   <option key={idx} value={option}>{option}</option>
//                 ))}
//               </select>
//             ) : (
//               <input
//                 name={name}
//                 type={type}
//                 className="border border-border rounded p-2 w-full"
//                 value={value}
//                 onChange={handleChange}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-6">
//         <button className="bg-muted text-muted-foreground hover:bg-muted/80 px-4 py-2 rounded transition-colors">Cancel</button>
//         <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded transition-colors">Submit</button>
//       </div>
//     </div>
   
//   );
// };

// export default EmployeeEditForm;
