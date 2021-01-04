import React from 'react';

import '../css/Footeralt.css';



function Footer2() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__options">
                    <ul className="menu">
                        <li className="menu__item">
                            <a href="/portfolio" className="slideUp delay-3 footerhover">Portfolio <img src="/icons/menu-arrow.svg" alt="Menu Arrow" /></a>
                        </li>
                        {/* <li className="menu__item">
                    <a href="sobre-mi.html" className="slideUp delay-6 footerhover">Sobre Mí <img src="/icons/menu-arrow.svg" alt="Menu Arrow" /></a>
                </li>
                <li className="menu__item">
                    <a href="mailto:info@peralstudio.com" target="_blank" rel="noopener noreferrer" className="slideUp delay-6 footerhover">Contacto <img src="/icons/menu-arrow.svg" alt="Menu Arrow" /></a>
                </li> */}
                    </ul>
                    <ul className="social-menu">
                        <li className="social-menu__item">
                            <a className="twitter slideUp delay-3" href="mailto:info@peralstudio.com" target="_blank" rel="noopener noreferrer">
                                <span>Email</span>
                                <div className="social-menu__icon">
                                    <img src="icons/link.svg" alt="Link" />
                                    <img src="icons/email.svg" alt="Twitter Logo" />
                                </div>
                            </a>
                        </li>
                        <li className="social-menu__item">
                            <a className="github slideUp delay-3" href="https://github.com/PeralStudio" target="_blank" rel="noopener noreferrer">
                                <span>GitHub</span>
                                <div className="social-menu__icon">
                                    <img src="/icons/link.svg" alt="Link" />
                                    <img src="/icons/github-logo.svg" alt="GitHub Logo" />
                                </div>
                            </a>
                        </li>
                        <li className="social-menu__item">
                            <a className="linkedin slideUp delay-3" href="https://wa.me/34668568818" target="_blank" rel="noopener noreferrer">
                                <span>WhatsApp</span>
                                <div className="social-menu__icon">
                                    <img src="icons/link.svg" alt="Link" />
                                    <img src="icons/whatsapp.svg" alt="LinkedIn Logo" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__copyright">
                    <span className="made-with slideUp delay-3">Creado con <img src="/icons/heart.svg" alt="heart" /></span>
                    <span className="copyright slideUp delay-3">© 2020 Alberto Peral.</span>
                </div>
            </div>
        </footer>



    );
}


export default Footer2;

