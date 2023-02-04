import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import { Header } from "./components/Header/header";
import { HomePage } from "./components/HomePage/homePage";
import { CourseData } from "./components/HomePage/CourseData";
// import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage courses={CourseData} />
    </div>
  );
}

export default App;
