import React from 'react';
import BackToTop from 'react-easy-back-to-top';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../css/PortfolioPages.css';

function WebECommercePage() {
    return (
        <div className="containerall">
            <div className="background" />
            <div className="grid">
                <div className="blur" id="blur" />
                <div className="grid-boundaries" />
                {/* Header */}
                <header className="header">
                    <div className="header__title">
                        <h1 className="slideUp">Web E-commerce</h1>
                    </div>
                </header>
                <div className="container pinned">
                    <div className="pinned-message">
                        <p className="pinned-message__text slideUp delay-2">Proyecto Web E-commerce.</p>
                    </div>
                </div>
                {/* Main Section */}
                <main className="main-section">
                    <div className="container">
                        <div className="project-options fadeIn delay-3">
                            {/* <a href="https://github.com/PeralStudio/BuscadorLetrasDeCanciones" target="_blank" rel="noopener noreferrer" className="button">Código
                  <img src="/icons/github-logo.svg" alt="GitHub Logo" /></a> */}
                            <a href="https://webecommerce.peralstudio.com/" target="_blank" rel="noopener noreferrer" className="button">Previsualizar <img src="/icons/menu-arrow.svg" alt="Preview arrow" /></a>
                        </div>
                        <section className="projects slideshow fadeIn delay-3">

                            <Carousel>
                                <div>
                                    <img src="/img-portfolio/1.png" alt="1" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src="/img-portfolio/3.png" alt="1" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src="/img-portfolio/5.png" alt="1" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src="/img-portfolio/6.png" alt="1" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src="/img-portfolio/7.png" alt="1" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src="/img-portfolio/8.png" alt="1" />
                                    <p className="legend">Legend 1</p>
                                </div>
                            </Carousel>

                        </section>
                        <section className="project-info fadeIn delay-3">
                            <article className="article">
                                <h2 className="article__title">Información</h2>
                                <p className="article__text">Este es un proyecto sobre una pagina web E-commerce de una tienda virtual con
                                pasarela de pago.
                  </p>
                                <p className="article__text">El proyecto aún está en desarrollo. Agregaré algunas características.</p>
                            </article>
                            <article className="article2">
                                <h2 className="article__title2">Tecnologías</h2>
                                <ul className="list">
                                    <li className="list__item">
                                        <img src="/icons/wordpress.svg" alt="Git" />
                                        <span>Wordpress</span>
                                    </li>
                                    <li className="list__item">
                                        <img src="/icons/woocommerce.svg" alt="JavaScript" />
                                        <span>WooCommerce</span>
                                    </li>
                                    <li className="list__item">
                                        <img src="/icons/js-logo.svg" alt="JavaScript" />
                                        <span>Javascript</span>
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
                            showOnDistance={150}
                            borderRadius={10}
                            opacity="1"
                            color="white"
                            fontSize="15px"
                            icon="fas fa-chevron-up"
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default WebECommercePage;