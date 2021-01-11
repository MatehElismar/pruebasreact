import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
import Products from './components/pages/Products';
import Prueba from './components/pages/Prueba';
import FirebaseAngularCompleteCrud from './components/pages/FirebaseAngularCompleteCrud';
import ChatAppRealtime from './components/pages/ChatAppRealtimeReact';
import JuegoSnake from './components/pages/JuegoSnake';
import SpotiApp from './components/pages/SpotiappApispotify';
import ReactBuscadorImagenes from './components/pages/ReactBuscadorImagenes';
import ReactBusCanciones from './components/pages/ReactBuscadorCanciones';
import ReactClima from './components/pages/ReactAppClima';
import ReactFirebaseCrud from './components/pages/ReactFirebaseCrud';
import WebECommerce from './components/pages/WebECommerce';
import CrudFirebaseUsers from './components/pages/CrudfirebaseUsers';
import DynoGame from './components/pages/DynoGame';
import ScrollToTop from './components/AutoScrollTop';

function App() {
  return (
    <>
      <Router primary={false}>
        <Navbar />
        <Switch>
          <ScrollToTop path="/">
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/productos' component={Products} />
          <Route path='/prueba' component={Prueba} />
          <Route path='/firebase-angular-complete-crud' component={FirebaseAngularCompleteCrud} />
          <Route path='/chat-app-realtime-react' component={ChatAppRealtime} />
          <Route path='/juego-snake' component={JuegoSnake} />
          <Route path='/spotiapp-apispotify' component={SpotiApp} />
          <Route path='/react-buscador-imagenes' component={ReactBuscadorImagenes} />
          <Route path='/react-buscador-canciones' component={ReactBusCanciones} />
          <Route path='/react-app-clima' component={ReactClima} />
          <Route path='/react-firebase-crud' component={ReactFirebaseCrud} />
          <Route path='/web-e-commerce' component={WebECommerce} />
          <Route path='/crudfirebaseusers' component={CrudFirebaseUsers} />
          <Route path='/dynogame' component={DynoGame} />
          <Route exact path='/' component={Home} />
          </ScrollToTop>
        </Switch>
      </Router>

    </>
  );
}

export default App;
