import { useState } from 'react'
import Button from '@mui/material/Button';
import Login from './components/Login';
import { CommonText } from './common/CustomText';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button variant="outlined" >Hello World</Button>
      <Login />
    </div>
  )
}

export default App
