import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/employeeService";

const EmployeeDetails = () => {

    const employeeParams = useParams();
    const [employee, setEmployee] = useState('');

    useEffect(() => {
        console.log(employeeParams.id);
        const fetchEmployeeById = async (id) => {
            try {
                const data = await getEmployeeById(id);
                console.log(data);
                setEmployee(data);
            } catch (err) {
                console.error('Error fetching employee');
            }
        };
        fetchEmployeeById(employeeParams.id);
    }, []);


    return (
        <>
            <p>Employee Details</p>
            <p>{employeeParams.id} </p>
            <p>Id: {employee.id} </p>
            <p>Name: {employee.name} </p>
            <p>Salary: {employee.salary} </p>
            <hr />
        </>
    );
};

export default EmployeeDetails;


// {/* <img src={"https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg"} alt="DB logo" /> */}
