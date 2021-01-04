import React from 'react';
/* import { Link } from 'react-router-dom'; */
import BackToTop from 'react-easy-back-to-top';
import '../App.css';
import '../css/Portfolio.css';


// Imports icons
import projectArrow from '../icons/projects-arrow.svg';
import iconLink from '../icons/link.svg';
import iconGithub from '../icons/github-logo.svg';
import iconWeb from '../icons/web.svg';


const circlesthumb = [
  <span className="screen-bar__options" key="spanCircles">
    <svg width={10} height={10}>
      <circle cx={5} cy={5} r={5} fill="#FF5F57" />
    </svg>
    <svg width={10} height={10}>
      <circle cx={5} cy={5} r={5} fill="#FFBD2E" />
    </svg>
    <svg width={10} height={10}>
      <circle cx={5} cy={5} r={5} fill="#28CA41" />
    </svg>
  </span>
]



function Portfolio() {
  return (
    <div className='container-all'>
      <div className="grid">

        {/* Header */}
        <header className="header">
          <div className="header__title">
            <h1 className="slideUp">Portfolio</h1>
          </div>
        </header>
        <div className="container pinned">
          <div className="pinned-message">
            <p className="pinned-message__text slideUp delay-2"> Como la práctica hace la perfección, aquí hay una lista con
                algunos de mis proyectos personales.</p>
          </div>
        </div>
        {/* Header1 */}
        <header className="header">
          <div className="header__title">
            <h1 className="slideUp"><u>Aplicaciones</u></h1>
          </div>
        </header>
        <main className="main-section">
          <div className="container">
            <div className="projects fadeIn delay-3">
              <div className="project">
                <div className="screen-bar">
                  {circlesthumb}
                  <h4 className="screen-bar__title">Crud completo Angular + firebase</h4>
                </div>
                <div className="main-screen">
                  <img src="/img-portfolio/crudangular1.png" alt="peralstudio.com" />
                </div>
                <div className="project__options">
                  <div className="options">
                    <a href="https://github.com/PeralStudio/ejercicio-firebase" target="_blank" rel='noopener noreferrer'>
                      <span>Código</span>
                      <div className="options__github">
                        <img src={iconLink} alt="Link" />
                        <img src={iconGithub} alt="GitHub Logo" />
                      </div>
                    </a><a href="https://angular-firebase.peralstudio.com/" target="_blank" rel='noopener noreferrer'><span>Previsualizar</span>
                      <div className="options__github">
                        <img src={iconLink} alt="Link" />
                        <img src={iconWeb} alt="Previsualizar" />
                      </div>
                    </a><a href={"/firebase-angular-complete-crud"}>Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" /></a>
                    {/* <Link
                      to='/firebase-angular-complete-crud'
                    >
                      Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" />
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="screen-bar">
                  {circlesthumb}
                  <h4 className="screen-bar__title">Chat App Real-Time React Socket.io</h4>
                </div>
                <div className="main-screen">
                  <img src="/img-portfolio/ss1.png" alt="peralstudio.com" />
                </div>
                <div className="project__options">
                  <div className="options">
                    <a href="https://github.com/PeralStudio/Chat-App-RealTime-React" target="_blank" rel='noopener noreferrer'>
                      <span>Código</span>
                      <div className="options__github">
                        <img src={iconLink} alt="Link" />
                        <img src={iconGithub} alt="GitHub Logo" />
                      </div>
                    </a><a href="https://chat-app-realtime.netlify.app/" target="_blank" rel='noopener noreferrer'><span>Previsualizar</span>
                      <div className="options__github">
                        <img src={iconLink} alt="Link" />
                        <img src={iconWeb} alt="Previsualizar" />
                      </div>
                    </a><a href="/chat-app-realtime-react">Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" /></a>
                    {/* <Link
                      to='/chat-app-realtime-react'
                    >
                      Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br /><br />
        </main>
        <main className="main-section">
          <div className="container">
            <div className="projects fadeIn delay-3">
              <div className="project">
                <div className="screen-bar">
                  {circlesthumb}
                  <h4 className="screen-bar__title">Proyecto Juego Snake JavaScript</h4>
                </div>
                <div className="main-screen">
                  <img src="/img-portfolio/JuegoSnakeJavascript.png" alt="Proyecto Juego Snake JavaScript" />
                </div>
                <div className="project__options">
                  <div className="options">
                    <div className="options">
                      <a href="https://github.com/PeralStudio/JuegoSnakeJavascript" target="_blank" rel='noopener noreferrer'>
                        <span>Código</span>
                        <div className="options__github">
                          <img src={iconLink} alt="Link" />
                          <img src={iconGithub} alt="GitHub Logo" />
                        </div>
                      </a><a href="https://snake.peralstudio.com" target="_blank" rel='noopener noreferrer'><span>Previsualizar</span>
                        <div className="options__github">
                          <img src={iconLink} alt="Link" />
                          <img src={iconWeb} alt="Previsualizar" />
                        </div>
                      </a><a href="/juego-snake">Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" /></a>
                      {/* <Link
                        to='/juego-snake'
                      >
                        Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="screen-bar">
                  {circlesthumb}
                  <h4 className="screen-bar__title">Proyecto Angular consumiendo API Spotify </h4>
                </div>
                <div className="main-screen">
                  <img src="/img-portfolio/spoti3.png" alt="Buscador Letras Canciones React" />
                </div>
                <div className="project__options">
                  <div className="options">
                    <div className="options">
                      <a href="https://github.com/PeralStudio/SpotiApp-Testing" target="_blank" rel='noopener noreferrer'>
                        <span>Código</span>
                        <div className="options__github">
                          <img src={iconLink} alt="Link" />
                          <img src={iconGithub} alt="GitHub Logo" />
                        </div>
                      </a><a href="/spotiapp-apispotify">Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" /></a>
                      {/* <Link
                        to='/spotiapp-apispotify'
                      >
                        Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main></div><br /><br /><br />
      <main className="main-section">
        <div className="container">
          <div className="projects fadeIn delay-5">
            <div className="project">
              <div className="screen-bar">
                {circlesthumb}
                <h4 className="screen-bar__title">REACT - Buscador de Imágenes</h4>
              </div>
              <div className="main-screen">
                <img src="/img-portfolio/buscadordefotos.png" alt="Buscador de imágenes" />
              </div>
              <div className="project__options">
                <div className="options">
                  <a href="https://github.com/PeralStudio/BuscadorDeFotos" target="_blank" rel='noopener noreferrer'>
                    <span>Código</span>
                    <div className="options__github">
                      <img src={iconLink} alt="Link" />
                      <img src={iconGithub} alt="GitHub Logo" />
                    </div>
                  </a><a href="https://peralstudio.github.io/BuscadorDeFotos/" target="_blank" rel='noopener noreferrer'><span>Previsualizar</span>
                    <div className="options__github">
                      <img src={iconLink} alt="Link" />
                      <img src={iconWeb} alt="Previsualizar" />
                    </div>
                  </a><a href="/react-buscador-imagenes">Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" /></a>
                  {/* <Link
                    to='/react-buscador-imagenes'
                  >
                    Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="project">
              <div className="screen-bar">
                {circlesthumb}
                <h4 className="screen-bar__title">REACT - Buscador Letras Canciones</h4>
              </div>
              <div className="main-screen">
                <img src="/img-portfolio/buscadorletracanciones.png" alt="Buscador Letras Canciones React" />
              </div>
              <div className="project__options">
                <div className="options">
                  <div className="options">
                    <a href="https://github.com/PeralStudio/BuscadorLetrasDeCanciones" target="_blank" rel='noopener noreferrer'>
                      <span>Código</span>
                      <div className="options__github">
                        <img src={iconLink} alt="Link" />
                        <img src={iconGithub} alt="GitHub Logo" />
                      </div>
                    </a><a href="https://peralstudio.github.io/BuscadorLetrasDeCanciones/" target="_blank" rel='noopener noreferrer'><span>Previsualizar</span>
                      <div className="options__github">
                        <img src={iconLink} alt="Link" />
                        <img src={iconWeb} alt="Previsualizar" />
                      </div>
                    </a><a href="/react-buscador-canciones">Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" /></a>
                    {/* <Link
                      to='/react-buscador-canciones'
                    >
                      Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
      </main>
      <main className="main-section">
        <div className="container">
          <div className="projects fadeIn delay-6">
            <div className="project">
              <div className="screen-bar">
                {circlesthumb}
                <h4 className="screen-bar__title">REACT - Webapp clima</h4>
              </div>
              <div className="main-screen">
                <img src="/img-portfolio/climav2.png" alt="peralstudio.com" />
              </div>
              <div className="project__options">
                <div className="options">
                  <a href="https://github.com/PeralStudio/Clima-v2" target="_blank" rel='noopener noreferrer'>
                    <span>Código</span>
                    <div className="options__github">
                      <img src={iconLink} alt="Link" />
                      <img src={iconGithub} alt="GitHub Logo" />
                    </div>
                  </a><a href="https://peralstudio.github.io/Clima-v2/" target="_blank" rel='noopener noreferrer'><span>Previsualizar</span>
                    <div className="options__github">
                      <img src={iconLink} alt="Link" />
                      <img src={iconWeb} alt="Previsualizar" />
                    </div>
                  </a><a href="/react-app-clima">Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" /></a>
                  {/* <Link to={{
                    pathname: '/react-app-clima',
                  }}
                  >
                    Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="project">
              <div className="screen-bar">
                {circlesthumb}
                <h4 className="screen-bar__title">REACT - Firebase Crud - Socket.io </h4>
              </div>
              <div className="main-screen">
                <img src="/img-portfolio/crud-react-firebase.png" alt="Buscador Letras Canciones React" />
              </div>
              <div className="project__options">
                <div className="options">
                  <div className="options">
                    <a href="https://github.com/PeralStudio/Firebase-React-Crud" target="_blank" rel='noopener noreferrer'>
                      <span>Código</span>
                      <div className="options__github">
                        <img src={iconLink} alt="Link" />
                        <img src={iconGithub} alt="GitHub Logo" />
                      </div>
                    </a><a href="https://gracious-jones-22cf47.netlify.app/" target="_blank" rel='noopener noreferrer'><span>Previsualizar</span>
                      <div className="options__github">
                        <img src={iconLink} alt="Link" />
                        <img src={iconWeb} alt="Previsualizar" />
                      </div>
                    </a><a href="/react-firebase-crud">Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" /></a>
                    {/* <Link
                      to='/react-firebase-crud'
                    >
                      Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br /><br /><br />
      </main>
      {/* Header2 */}
      <header className="header">
        <div className="header__title">
          <h1 className="slideUp"><u className="tittlehover">Páginas Web</u></h1>
        </div>
      </header>
      {/* Main Section */}
      <main className="main-section">
        <div className="container">
          <div className="projects fadeIn delay-6">
            <div className="project">
              <div className="screen-bar">
                {circlesthumb}
                <h4 className="screen-bar__title">PeralStudio.com - Web Personal</h4>
              </div>
              <div className="main-screen">
                <img src="/img-portfolio/peralstudio1.png" alt="Alberto Peral developer" />
              </div>
              {/* <div className="project__options">
                 <div className="options">
                  <a href="#" target="_blank">
                    <span>Código</span>
                    <div class="options__github">
                      <img src="assets/icons/link.svg" alt="Link">
                      <img src="assets/icons/github-logo.svg" alt="GitHub Logo">
                    </div>
                  <a href="https://peralstudio.com/" target="_blank">Previsualizar<img src="assets/icons/menu-arrow.svg" alt="Preview arrow" class="options__icon"></a>
                  <a href="peralstudio.html">Ver más... <img src="/icons/projects-arrow.svg" alt="Learn more arrow" className="options__icon" /></a>
                </div> 
              </div> */}
            </div>
            <div className="project">
              <div className="screen-bar">
                {circlesthumb}
                <h4 className="screen-bar__title">Web e-commerce</h4>
              </div>
              <div className="main-screen">
                <img src="/img-portfolio/1.png" alt="Web-Ecommerce PeralStudio" />
              </div>
              <div className="project__options">
                <div className="options">
                  <a href="https://webecommerce.peralstudio.com/" target="_blank" rel='noopener noreferrer'><span>Previsualizar</span>
                    <div className="options__github">
                      <img src={iconLink} alt="Link" />
                      <img src={iconWeb} alt="Previsualizar" />
                    </div>
                  </a><a href="/web-e-commerce">Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" /></a>
                  {/* <Link
                    to='/web-e-commerce'
                  >
                    Ver más... <img src={projectArrow} alt="Learn more arrow" className="options__icon" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
      </main>
      <BackToTop
        backgroundColor="#5500aa"
        position={{ right: "0%", bottom: "1%" }}
        hover={{ backgroundColor: "#440088", color: "white" }}
        transition="all 0.5s"
        showOnDistance={150}
        borderRadius={10}
        opacity="1"
        color="white"
        fontSize="15px"
        icon="fas fa-chevron-up"
      />
      {/* JS */}
    </div>




  );
}


export default Portfolio;