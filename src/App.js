import React from 'react'
import Getstart from './components/Getstart';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import NewsState from './components/NewsState';

function App() {


  return (

    <NewsState>

      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/getstart"><Getstart /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/signup"><Signup /></Route>
        </Switch>
      </Router>

    </NewsState>



  );
}


export default App;




