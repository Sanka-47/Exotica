import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { SingleVehicleView } from "./pages/SingleVehicleView";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Signin />} />
          <Route element={<Layout/>}>
            
            <Route path="/home" element={<Home />} />
            <Route path="/vehicle/:id" element={<SingleVehicleView />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
