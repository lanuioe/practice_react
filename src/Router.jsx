import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default Router;
