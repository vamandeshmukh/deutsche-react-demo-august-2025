import AppRoutes from "./components/Common/AppRoutes";
import NavBar from './components/Common/NavBar';

const App = () => {

  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  )

}
export default App;

// import AppRoutes from "./components/Common/AppRoutes";

// const App = () => {

//   return (
//     <>
//     <p>App Component</p>
//     <AppRoutes></AppRoutes>
//     </>
//   )

// }
// export default App;


// import AppRoutes from "./components/Common/AppRoutes";
// import AddEmployee from "./components/Employee/AddEmployee";
// import EmployeeList from "./components/Employee/EmployeeList";

// const App = () => {

//   return (
//     <>
//     <p>App Component</p>
//     <hr />
//     <EmployeeList></EmployeeList>
//     </>
//   )

// }
// export default App;

// function App() {

//   return (
//     <>
//     <p>Hello world!</p>
//     <p>Hello world! 2</p>
//     </>
//   )
// }

// export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
