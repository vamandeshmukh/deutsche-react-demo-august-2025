import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container">
                <div
                    className="d-flex align-items-center justify-content-center flex-column"
                    style={{ height: "100vh" }}
                >
                    <p className="display-1 text-dark">Deutsche Bank React App</p>
                        <Link to="/employees" className="text-decoration-none" >View Employees...</Link>
                </div>
            </div>
        </>
    );
};

export default Home;
