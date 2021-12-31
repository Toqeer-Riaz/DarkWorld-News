// import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react'
import Navbar from "./components/Navbar";

import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter as Router,Switch,Route,useHistory} from "react-router-dom";
import { Home } from './components/Home';

function App() {
  let history=useHistory();

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
        <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
    
    
      <Switch>
        {localStorage.getItem('token')&&<Home mode={mode}/>}

      
    
      <Route exact path="/login"><Login /> </Route>
      <Route exact path="/signup"><Signup /></Route>  
      </Switch>
      </Router>
    </div>
  );
}

export default App;
