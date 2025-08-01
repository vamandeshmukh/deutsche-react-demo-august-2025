import EmployeeDetails from "../Employee/EmployeeDetails";

const EmployeeList = () => {

    const empList = [
        { name: "Sonu", salary: 90000 },
        { name: "Monu", salary: 95000 },
        { name: "Tonu", salary: 92000 },
        { name: "Ponu", salary: 98000 }
    ];

    return (
        <>
            <p>Employee List - parent</p>
            {empList.map((emp, index) =>
                <p key={index} >Name: {emp.name}, Salary: {emp.salary}  </p>
            )}
            {/* <EmployeeDetails></EmployeeDetails> */}
        </>
    );
};

export default EmployeeList;