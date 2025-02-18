import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./lee/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login/Page" element={<Login />}></Route>
    </Routes>
  );
};

export default Router;
