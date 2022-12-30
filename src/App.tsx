import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import { CommonText } from "./common/CustomText";
import { CustomButton } from "./common/CustomButton";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button variant="outlined">Hello World</Button>
      <Login />
      <CustomButton
        label="Categories"
        className="category"
        onClick={() => console.log("Button clicked")}
        variant="text"
      />
    </div>
  );
}

export default App;
