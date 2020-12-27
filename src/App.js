import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
import Products from './components/pages/Products';
import Prueba from './components/pages/Prueba';
import SignUp from './components/pages/SignUp';
import FirebaseAngularCompleteCrud from './components/pages/FirebaseAngularCompleteCrud';
import ChatAppRealtime from './components/pages/ChatAppRealtimeReact';
import JuegoSnake from './components/pages/JuegoSnake';
import SpotiApp from './components/pages/SpotiappApispotify';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/productos' component={Products} />
          <Route path='/prueba' component={Prueba} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/firebase-angular-complete-crud' component={FirebaseAngularCompleteCrud} />
          <Route path='/chat-app-realtime-react' component={ChatAppRealtime} />
          <Route path='/juego-snake' component={JuegoSnake} />
          <Route path='/spotiapp-apispotify' component={SpotiApp} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
