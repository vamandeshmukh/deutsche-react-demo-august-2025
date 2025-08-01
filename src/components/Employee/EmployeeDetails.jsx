
const EmployeeDetails = (props) => {
    
    console.log('EmployeeDetails');

    const firstName = "Vaman";

    return(
        <>
        <p>Employee Details - Child</p>
        <p>Name: {firstName}</p>
        <p>Name: {props.name}</p>
        <p>Salary: {props.salary}</p>
        </>
    );
};

export default EmployeeDetails;











        // {/* <img src={"https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg"} alt="DB logo" /> */}
