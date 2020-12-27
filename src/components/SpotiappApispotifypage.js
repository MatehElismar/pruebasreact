import React from 'react';
import BackToTop from 'react-easy-back-to-top';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../css/SpotiappApispotify.css';

function SpotiappApispotifypage() {
    return (
        <div className="containerall">
            <div className="background" />
            <div className="grid">
                <div className="blur" id="blur" />
                <div className="grid-boundaries" />
                {/* Header */}
                <header className="header">
                    <div className="header__title">
                        <h1 className="slideUp">SpotiApp - Proyecto Angular consumiendo API Spotify</h1>
                    </div>
                </header>
                <div className="container pinned">
                    <div className="pinned-message">
                        <p className="pinned-message__text slideUp delay-2">Proyecto Angular consumiendo API Spotify.</p>
                    </div>
                </div>
                {/* Main Section */}
                <main className="main-section">
                    <div className="container">
                        <div className="project-options fadeIn delay-6">
                            <a href="https://github.com/PeralStudio/SpotiApp-Testing" target="_blank" rel="noopener noreferrer" className="button">Código <img src="/icons/github-logo.svg" alt="GitHub Logo" /></a>
                        </div>
                        <section className="projects slideshow fadeIn delay-6">
                            <Carousel>
                                <div>
                                    <img src="/img-portfolio/spoti1.png" alt="1" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src="/img-portfolio/spoti2.png" alt="2" />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>
                                    <img src="/img-portfolio/spoti3.png" alt="3" />
                                    <p className="legend">Legend 3</p>
                                </div>
                                <div>
                                    <img src="/img-portfolio/spoti4.png" alt="3" />
                                    <p className="legend">Legend 3</p>
                                </div>
                            </Carousel>

                        </section>
                        <section className="project-info fadeIn delay-6">
                            <article className="article">
                                <h2 className="article__title">Información</h2>
                                <p className="article__text">Este es un proyecto creando un chat con respuesta en tiempo real usando Socket.io.
                  </p>
                                <p className="article__text">El proyecto aún está en desarrollo. Agregaré algunas características.</p>
                            </article>
                            <article className="article2">
                                <h2 className="article__title2">Tecnologías</h2>
                                <ul className="list">
                                    <li className="list__item">
                                        <img src="/icons/angular.svg" alt="Git" />
                                        <span>Angular</span>
                                    </li>
                                    <li className="list__item">
                                        <img src="/icons/typescript.svg" alt="JavaScript" />
                                        <span>Typescript</span>
                                    </li>
                                    <li className="list__item">
                                        <img src="/icons/html5-logo.svg" alt="HTML5" />
                                        <span>HTML</span>
                                    </li>
                                    <li className="list__item">
                                        <img src="/icons/css-logo.svg" alt="CSS3" />
                                        <span>CSS</span>
                                    </li>
                                </ul>
                            </article>
                        </section>
                    </div>
                    <div className="backtotop">
                        <BackToTop
                            backgroundColor="#5500aa"
                            position={{ right: "0%", bottom: "1%" }}
                            hover={{ backgroundColor: "#440088", color: "white" }}
                            transition="all 0.5s"
                            showOnDistance={300}
                            borderRadius={10}
                            opacity="1"
                            color="white"
                            fontSize="15px"
                            icon="fas fa-arrow-up"
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default SpotiappApispotifypage;
