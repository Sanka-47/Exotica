import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

import SignIn from "./Signin";
import { Switch } from "@mui/material";
import SingleVehicleView from "./SingleVehicleView";

const App = () => {
  return (
    <Routes>
      
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/vehicle/:id" element={<SingleVehicleView />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

export default App;
