import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Pruebapage.css';

const element = "Hola";
const user = {
  firstName: 'Alberto',
  lastName: 'Peral'
};

function Pruebapage() {
  return (
    <div className='pruebapage'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Prueba, {element}</h1>
      <p>{`${user.firstName}, ${user.lastName}`}</p>

    </div>


  );
}


export default Pruebapage;