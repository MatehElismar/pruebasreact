import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
/* import { Button } from './Button'; */
import './PagPrincipal.css';



function PagPrincipal() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted />  */}
      <div>
        <img className='img-principal' src={"images/avatar.png"} alt='logopagPrin'/>
      </div>
      <h1>
        Hola, Soy Alberto Peral</h1>
      <p>Me gusta crear con tecnologías web.</p>
      <div className="link-portfolio">

        <Link
          to='/prueba'
          className='linkPortfolio'
        >
          Mira los últimos proyectos en los que he estado trabajando.
                <img src="images/projects-arrow.svg" alt="Projects Arrow" />
        </Link>

      </div>

      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >

          PORTFOLIO <i className='fas fa-tasks' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SOBRE MÍ <i className='fas fa-user' />
        </Button>
      </div> */}
    </div>
  );
}

export default PagPrincipal;
