import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
            <Link to={"/"} >Home</Link>
            <Link to={"/employees"} >Employees</Link>
            <Link to={"/employees/new"} >Add Employee</Link>
            <Link to={"/login"} >Login</Link>
            <Link to={"/register"} >Register</Link>
        </>
    );

};

export default NavBar;