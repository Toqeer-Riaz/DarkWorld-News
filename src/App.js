import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home  from './components/Home';

// import Login from './components/Login';
// import Signup from './components/Signup';

function App() {
  const pagesize=12;
  const country='us';
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
     <Route exact path="/"><Home/></Route>
     <Route exact path="/general"><News key="general" mode={mode} pagesize={pagesize} country={country} category='general'/></Route>
     <Route exact path="/business"><News key="business" mode={mode} pagesize={pagesize} country={country} category='business'/></Route>
     <Route exact path="/entertainment"><News key="entertainment" mode={mode} pagesize={pagesize} country={country} category='entertainment'/></Route>
     <Route exact path="/health"><News key="health" mode={mode} pagesize={pagesize} country={country} category='health'/></Route>
     <Route exact path="/science"><News key="science" mode={mode} pagesize={pagesize} country={country} category='science'/></Route>
     <Route exact path="/sports"><News key="sports" mode={mode} pagesize={pagesize} country={country} category='sports'/></Route>
     <Route exact path="/technology"><News key="technology" mode={mode} pagesize={pagesize} country={country} category='technology'/></Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;




