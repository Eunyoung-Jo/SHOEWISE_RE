import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Start from "./routes/Start.js";
// import Login from "./routes/Login.js";
// import Home from "./routes/Home.js";
// import Review from "./routes/Review.js";


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/">
            <Start />
          </Route>
          <Route path="/login">
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
