import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import Home from '../Common/Home';
import Login from '../Common/Login';
import Register from '../Common/Register';
import Page404 from '../Common/Page404';
import EmployeeList from '../Employee/EmployeeList';
import EmployeeDetails from '../Employee/EmployeeDetails';
import AddEmployee from '../Employee/AddEmployee';

const AppRoutes = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = user && user.trim() !== "";

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      {isLoggedIn && (
        <>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/employees/new" element={<AddEmployee />} />
        </>
      )}
      {!isLoggedIn && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;


// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from '../Common/Home';
// import Login from '../Common/Login';
// import Register from '../Common/Register';
// import Page404 from '../Common/Page404';
// import EmployeeList from '../Employee/EmployeeList';
// import EmployeeDetails from '../Employee/EmployeeDetails';
// import AddEmployee from '../Employee/AddEmployee';

// const AppRoutes = () => {

//     return (
//         <Routes>
//             <Route path="/" element={< Home />} />
//             <Route path="/home" element={< Navigate to={"/"} />} />
//             <Route path="/employees" element={< EmployeeList />} />
//             <Route path="/employees/:id" element={< EmployeeDetails />} />
//             <Route path="/employees/new" element={< AddEmployee />} />
//             <Route path="/login" element={< Login />} />
//             <Route path="/register" element={< Register />} />
//             <Route path="*" element={< Page404 />} />
//         </Routes>
//     );
// };

// export default AppRoutes;

// // App URLs -
// // http://localhost:5173/
// // http://localhost:5173/home
// // http://localhost:5173/employees
// // http://localhost:5173/employees/10
// // http://localhost:5173/employees/new
// // http://localhost:5173/login
// // http://localhost:5173/register
// // http://localhost:5173/any-undefined-path
