import React from 'react'
import News from "./News";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
export const Home = (props) => {
  const {mode}=props.mode  
  const pagesize=12
  const country='us'


    return (
        <div>
                <Router>
 
    
    
      <Switch>
    
     <Route exact path="/"><News key="general" mode={mode} pagesize={pagesize} country={country} category='general'/></Route>
     <Route exact path="/business"><News key="business" mode={mode} pagesize={pagesize} country={country} category='business'/></Route>
     <Route exact path="/entertainment"><News key="entertainment" mode={mode} pagesize={pagesize} country={country} category='entertainment'/></Route>
     <Route exact path="/health"><News key="health" mode={mode} pagesize={pagesize} country={country} category='health'/></Route>
     <Route exact path="/science"><News key="science" mode={mode} pagesize={pagesize} country={country} category='science'/></Route>
     <Route exact path="/sports"><News key="sports" mode={mode} pagesize={pagesize} country={country} category='sports'/></Route>
     <Route exact path="/technology"><News key="technology" mode={mode} pagesize={pagesize} country={country} category='technology'/></Route>

      </Switch>
      </Router>
            
        </div>
    )
}
