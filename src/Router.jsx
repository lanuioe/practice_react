import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./lee/components/Login/Login";
import MainHeader from "./lee/components/MainHeader/MainHeader";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login/Page" element={<Login />}></Route>
      <Route path="/Main/Page" element={<MainHeader />}></Route>
    </Routes>
  );
};

export default Router;
