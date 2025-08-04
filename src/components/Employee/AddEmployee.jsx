import { useState } from "react";
import { addEmployee } from "../../services/employeeService";

const AddEmployee = () => {

    const [employee, setEmployee] = useState({ name: "", salary: "" });
    const [message, setMessage] = useState("");

    const handleChange = (evt) => {
        console.log(evt.target.value);
        setEmployee({ ...employee, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await addEmployee(employee);
            setMessage("Employee added successfully!");
            setEmployee({ name: "", salary: "" });
        } catch (error) {
            console.error("Error adding employee:", error);
            setMessage("Failed to add employee.");
        }
    };

    return (
        <>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Salary:</label>
                    <input
                        type="number"
                        name="salary"
                        value={employee.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add</button>
            </form>
            {message && <p>{message}</p>}
        </>
    );
};

export default AddEmployee;



// const AddEmployee = () => {
//     return (
//         <>
//             <p>Add Employee</p>
//         </>
//     );

// }

// export default AddEmployee;