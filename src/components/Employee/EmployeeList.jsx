import { Link } from "react-router-dom";
import { getAllEmployees } from "../../services/employeeService";
import { useEffect, useState } from "react";

const EmployeeList = () => {

    const [empList, setEmpList] = useState([]);

    useEffect(() => {
        console.log('component loaded');
        const fetchEmployees = async () => {
            try {
                const data = await getAllEmployees();
                console.log(data);
                setEmpList(data);
            } catch (err) {
                console.error('Error fetching employees:');
            }
        };
        fetchEmployees();
    }, []);

    return (
        <>
            <p>Employee List</p>
            {empList && empList.map((emp, index) =>
                <p key={index}>{emp.name} <Link to={`/employees/${emp.id}`}>View details</ Link> </p>
            )}
        </>
    );
};

export default EmployeeList;




// import EmployeeList from "./components/Employee/EmployeeList";


// import { getAllEmployees } from "../../services/employeeService";
// import { useEffect, useState } from "react"; // hooks == methods == functions

// const EmployeeList = () => {

//     // // const state = {empList : '', empList2 : '', abc :  ''};
//     // const [empList, setEmpList] = useState([]);
//     // // // empList = 'another value'; // X
//     // // setEmpList('another value'); // yes
//     // // const [empList2, setEmpList2] = useState([]);

//     const [empList, setEmpList] = useState([]);
//     const [empData, setEmpData] = useState({ firstName: 'Samitha', city: 'Hyderabad' });

//     // useEffect(() => { }, []);

//     useEffect(() => {
//         console.log('component loaded');
//         const fetchEmployees = async () => {
//             try {
//                 const data = await getAllEmployees();
//                 console.log(data);
//                 setEmpList(data);
//             } catch (err) {
//                 console.error('Error fetching employees:');
//             }
//         };
//         fetchEmployees();
//     }, []);

//     return (
//         <>
//             <p>Sample Employee</p>
//             <p>{empData.firstName}</p>
//             <p>Employee List</p>
//             {empList.map((emp, index) =>
//                 <p key={index}>{emp.name}</p>
//             )}
//         </>
//     );
// };

// export default EmployeeList;


// import EmployeeDetails from "../Employee/EmployeeDetails";

// const EmployeeList = () => {

//     const empList = [
//         { name: "Sonu", salary: 90000 },
//         { name: "Monu", salary: 95000 },
//         { name: "Tonu", salary: 92000 },
//         { name: "Ponu", salary: 98000 }
//     ];

//     return (
//         <>
//             <p>Employee List - parent</p>
//             {empList.map((emp, index) =>
//                 <p key={index} >Name: {emp.name}, Salary: {emp.salary}  </p>
//             )}
//             {/* <EmployeeDetails></EmployeeDetails> */}
//         </>
//     );
// };

// export default EmployeeList;