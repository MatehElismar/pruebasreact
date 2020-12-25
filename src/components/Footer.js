import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div> */}

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <small className='website-rights'>    PERALSTUDIO © 2020</small>
          </div>

          <div className='social-icons'>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link> */}
            {/* <Link
              data-tip data-for='tooltiptwitter'
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <ReactTooltip id='tooltiptwitter'>
              Twitter
            </ReactTooltip>
            <Link
              data-tip data-for='tooltiplinkedin'
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <ReactTooltip id='tooltiplinkedin'>
              Linkedin
            </ReactTooltip> */}
            <Link
              data-tip data-for='tooltipgithub'
              className='social-icon-link twitter'
              to={{ pathname: "https://github.com/PeralStudio/" }}
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </Link>
            <ReactTooltip backgroundColor="#400180" id='tooltipgithub'>
              Github
            </ReactTooltip>
            <Link
              data-tip data-for='tooltipemail'
              className='social-icon-link email'
              to={{ pathname: "mailto:info@peralstudio.com" }}
              target='_blank'
              aria-label='Email'
            >
              <i className="fas fa-envelope"></i>
            </Link>
            <ReactTooltip backgroundColor="#400180" id='tooltipemail'>
              Email
            </ReactTooltip>
            <Link
              data-tip data-for='tooltipwhatsapp'
              className='social-icon-link whatsapp'
              to={{ pathname: "https://wa.me/34668568818?" }}
              target='_blank'
              aria-label='whatsapp'
            >
              <i className="fab fa-whatsapp"></i>
            </Link>
            <ReactTooltip backgroundColor="#400180" id='tooltipwhatsapp'>
              WhatsApp
            </ReactTooltip>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
