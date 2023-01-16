import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import { CommonText } from "./common/CustomText";
import { Header } from "./components/Header/header";
import { HomePage } from "./components/HomePage/homePage";
import { LoginForm } from "./components/LoginForm/loginForm";
import { SignUpForm } from "./components/SignUp/signUpForm";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
     {/* <LoginForm /> */}
      <SignUpForm />
    </div>
  );
}

export default App;
