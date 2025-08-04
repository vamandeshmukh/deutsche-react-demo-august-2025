
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




// import { Link } from "react-router-dom";

// const NavBar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="#">Navbar</Link>

//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" to="/">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/employees">
//                                     Employees
//                                 </Link>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <a
//                                     className="nav-link dropdown-toggle"
//                                     href="#"
//                                     role="button"
//                                     data-bs-toggle="dropdown"
//                                     aria-expanded="false"
//                                 >
//                                     More
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     <li>
//                                         <Link className="dropdown-item" to="/employees/new">
//                                             Add Employee
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link className="dropdown-item" to="/login">
//                                             Login
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <hr className="dropdown-divider" />
//                                     </li>
//                                     <li>
//                                         <Link className="dropdown-item" to="/register">
//                                             Register
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <span className="nav-link disabled" aria-disabled="true">
//                                     Disabled
//                                 </span>
//                             </li>
//                         </ul>

//                         <form className="d-flex" role="search">
//                             <input
//                                 className="form-control me-2"
//                                 type="search"
//                                 placeholder="Search"
//                                 aria-label="Search"
//                             />
//                             <button className="btn btn-outline-success" type="submit">
//                                 Search
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default NavBar;

