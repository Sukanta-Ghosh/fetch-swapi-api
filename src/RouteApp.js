import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

function RouteApp() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={App}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default RouteApp;
