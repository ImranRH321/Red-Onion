import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Sheared/Login/Login/Login";
import Header from "./pages/Sheared/Login/Header/Header";
import SignUp from "./pages/Sheared/Login/SignUp/SignUp";
import Home from "./pages/Home/Home/Home";
import BreakfastDetails from "./pages/Home/BreakfastDetails/BreakfastDetails";
import Order from "./pages/Order/Order";
import RequireAuth from "./pages/Sheared/RequireAuth/RequireAuth";
import { createContext, useContext, useState } from "react";

export const myContext = createContext()


function App() {
  const [cart , setCart] = useState([])
  return (
    <div className="App">
      <myContext.Provider value={[cart, setCart]}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/breakfast/:breakfastId"
          element={<BreakfastDetails />}
        ></Route>
        <Route path="/order" element={
          <RequireAuth>
           <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      </myContext.Provider>
    </div>
  );
}

export default App;
