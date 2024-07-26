// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://669b3f09276e45187d34eb4e.mockapi.io/api/v1',
});

export const getAllEmployees = () => api.get('/employee');
export const getEmployeeById = (id) => api.get(`/employee/${id}`);
export const createEmployee = (employee) => api.post('/employee', employee);
export const updateEmployee = (id, employee) => api.put(`/employee/${id}`, employee);
export const deleteEmployee = (id) => api.delete(`/employee/${id}`);
export const getCountries = () => api.get('/country');
