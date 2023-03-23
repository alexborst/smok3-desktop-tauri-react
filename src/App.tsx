import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Games from "./pages/Games";
import Markteplace from "./pages/Marketplace";
import BattlePass from "./pages/BattlePass";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Dashboard />
      break
    case "/dashboard":
        component = <Dashboard />
        break
    case "/games":
      component = <Games />
      break
    case "/marketplace":
      component = <Markteplace />
      break
    case "/battlepass":
      component = <BattlePass />
      break
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  )
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
