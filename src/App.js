import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Sheared/Login/Login/Login";
import Header from "./pages/Sheared/Login/Header/Header";
import SignUp from "./pages/Sheared/Login/SignUp/SignUp";
import Home from "./pages/Home/Home/Home";
// import Breakfasts from "./pages/Home/Services/Breakfasts/Breakfasts";
// import BreakfastDetails from "./pages/Home/BreakfastDetails/BreakfastDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/breakfasts" element={<Breakfasts />}></Route> */}
        {/* <Route path="/breakfastDetail/:breakFastId" element={<BreakfastDetails />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
