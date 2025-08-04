import axios from 'axios';

const apiUrl = "http://localhost:8090/api/v1/employees";

axios.defaults.auth = {
    username: 'vaman',
    password: 'vaman@123'
};

const getAllEmployees = async () => {
    console.log('getAllEmployees');
    const response = await axios.get(apiUrl);
    return response.data;
};

const getEmployeeById = async (id) => {
    console.log(id);
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
};

const addEmployee = async (employeeData) => {
    const response = await axios.post(apiUrl, employeeData);
    return response.data;
};

const updateEmployee = async (employeeData) => {
    const response = await axios.put(apiUrl, employeeData);
    return response.data;
};

const deleteEmployee = async (id) => {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
};

export { getAllEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee };
// import { getAllEmployees, getEmployeeById } from "../../services/employeeService";



