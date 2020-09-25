import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/Search/Search";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SearchPage />
      </div>
    </Router>
  );
}

export default App;
