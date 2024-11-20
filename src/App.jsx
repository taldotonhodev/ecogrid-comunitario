import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "./assets/styles/global.css";

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
