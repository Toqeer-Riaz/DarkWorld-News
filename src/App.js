// import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

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
        <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Switch>
      <Route exact path="/"><News key="general" mode={mode} pagesize={11} country='us' category='general'/></Route>
      <Route exact path="/business"><News key="business" mode={mode} pagesize={11} country='us' category='business'/></Route>
      <Route exact path="/entertainment"><News key="entertainment" mode={mode} pagesize={11} country='us' category='entertainment'/></Route>
      <Route exact path="/health"><News key="health" mode={mode} pagesize={11} country='us' category='health'/></Route>
      <Route exact path="/science"><News key="science" mode={mode} pagesize={11} country='us' category='science'/></Route>
      <Route exact path="/sports"><News key="sports" mode={mode} pagesize={11} country='us' category='sports'/></Route>
      <Route exact path="/technology"><News key="technology" mode={mode} pagesize={11} country='us' category='technology'/></Route>
          
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
