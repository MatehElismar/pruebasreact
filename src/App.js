import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Prueba from './components/pages/Prueba';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/servicios' component={Services} />
          <Route path='/productos' component={Products} />
          <Route path='/prueba' component={Prueba} />
          <Route path='/sign-up' component={SignUp} />
          <Route exact path='/' exact component={Home} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
