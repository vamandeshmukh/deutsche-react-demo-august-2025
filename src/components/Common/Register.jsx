import Parent from "../learning/Parent";

const Register = () => {


    return (
        <>
            <p>Register Component</p>
            <Parent />
        </>
    );

};

export default Register;


// const Register = () => {

//     const condition = true; // false;
//     const username = "vaman";

//     return (
//         <>
//             <p>Register Component</p>
//             {condition ? <>{username}</> : <>username not available</>}
//             {/* {
//                 if (condition)
//             <>{username}</>
//             }
//             else {
//                 <>data not available</>
//             } */}
//         </>
//     );

// };

// export default Register;