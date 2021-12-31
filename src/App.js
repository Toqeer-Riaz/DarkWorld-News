import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home  from './components/Home';
import LoadingBar from 'react-top-loading-bar'

// import Login from './components/Login';
// import Signup from './components/Signup';

function App() {
  const pagesize=12;
  const country='us';
  const [mode, setMode] = useState('light');
  const [progress, setprogresss] = useState(0) 
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
 
  function setprogress(progress) {
    setprogresss(progress);
    
  }

  
  return (
    <div className="App">
        <Router>
        <LoadingBar
        color='red'
        height={3}
        progress={progress}
      />
      <Navbar mode={mode} toggleMode={toggleMode} />
    
    
      <Switch>
     <Route exact path="/"><Home/></Route>
     <Route exact path="/general"><News setprogress={setprogress} key="general" mode={mode} pagesize={pagesize} country={country} category='general'/></Route>
     <Route exact path="/business"><News setprogress={setprogress} key="business" mode={mode} pagesize={pagesize} country={country} category='business'/></Route>
     <Route exact path="/entertainment"><News setprogress={setprogress} key="entertainment" mode={mode} pagesize={pagesize} country={country} category='entertainment'/></Route>
     <Route exact path="/health"><News setprogress={setprogress} key="health" mode={mode} pagesize={pagesize} country={country} category='health'/></Route>
     <Route exact path="/science"><News setprogress={setprogress} key="science" mode={mode} pagesize={pagesize} country={country} category='science'/></Route>
     <Route exact path="/sports"><News setprogress={setprogress} key="sports" mode={mode} pagesize={pagesize} country={country} category='sports'/></Route>
     <Route exact path="/technology"><News setprogress={setprogress} key="technology" mode={mode} pagesize={pagesize} country={country} category='technology'/></Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;




