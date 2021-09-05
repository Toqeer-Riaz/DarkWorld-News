// import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [mode, setMode] = useState('light'); 
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <News mode={mode} pagesize={8}/>
    </div>
  );
}

export default App;
