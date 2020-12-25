import React from 'react';
import '../App.css';
import BackToTop from 'react-easy-back-to-top';
/* import { Button } from './Button'; */
import '../css/Pruebapage.css';

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
      <BackToTop
        backgroundColor="#5500aa"
        position={{ right: "5%", bottom: "5%" }}
        hover={{ backgroundColor: "#440088", color: "white" }}
        transition="all 0.5s"
        showOnDistance={500}
        borderRadius={16}
        opacity="1"
        color="white"
        fontSize="24px"
        icon="fas fa-arrow-up"
      />
    </div>


  );
}


export default Pruebapage;