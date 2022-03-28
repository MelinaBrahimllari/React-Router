import React from "react";
import './App.css';
import Home from "./components/home";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

  <BrowserRouter>
  <Routes>
    <Route exact path="/:home" element={<Home />} />
    <Route exact path="/:home/:color/:bgcolor" element={<Home />} />
  </Routes>
</BrowserRouter>
);
}

export default App;
