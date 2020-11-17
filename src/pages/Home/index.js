import React from 'react';

import './style.css';

import Logo from '../../assets/images/Logo.png';
import Measure_primary from '../../assets/images/Measure-img.png';
import Measure_secondary from '../../assets/images/Measure2-img.png';

import FacebookIcon from '../../assets/images/Facebook-icon.png';
import TwitterIcon from '../../assets/images/Twitter-icon.png';
import YoutubeIcon from '../../assets/images/Youtube-icon.png';

import { FaEllipsisV } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='container'>
          <header className='header'>
            <div className='box-logo'>
              <img className='logo-img' src={Logo} alt='Logo' />
            </div>
            <div className='box-logo-text'>
              <span className='logo-text'>Zutterman</span>
              <span className='logo-text-2'>Measure tapes</span>
            </div>
            <input type='checkbox' id='check' />
            <label htmlFor='check' className='show-menu-btn'>
              <FaEllipsisV color='#E2E0B8' />
            </label>
            <ul className='menu'>
              <a>about us</a>
              <a>models</a>
              <a>guarantee</a>
              <label htmlFor='check' className='hide-menu-btn'>
                <i>
                  <GrFormClose />
                </i>
              </label>
            </ul>
          </header>
          <section className='section-primary' id='section-primary'>
            <div className='section-primary-text'>
              <span className='a'>measuring everything</span>
            </div>
            <div className='box-img-primary'>
              <img className='resize-image' src={Measure_primary} alt='' />
            </div>
          </section>
          <section className='section-secondary' id='section-secondary'>
            <div className='section-secondary-text'>
              <div className='section-secondary-header'>
                <span>We are Leader </span>
                <span>in Measure Tapes</span>
              </div>
              <div className='section-secondary-content'>
                <span>There are 5x the</span>
                <span>circumference of planet</span>
                <span>earth in metric tapes</span>
              </div>
            </div>
            <div className='box-img-secondary'>
              <img
                className='resize-image'
                src={Measure_secondary}
                alt='Measure'
              />
            </div>
          </section>
          <footer className='footer'>
            <div className='box-social-medias'>
              <span className='social-medias-header'>Follow us</span>
              <div className='box-social-medias-icons'>
                <img src={YoutubeIcon} alt='Instagram' />
                <img src={FacebookIcon} alt='Facebook' />
                <img src={TwitterIcon} alt='Twitter' />
              </div>
            </div>
            <div className='box-contact'>
              <span className='contact-header'>Contact </span>
              <div className='contact-infos'>
                <span className='contact-info-item'>24900 Leisure Lane</span>
                <span className='contact-info-item'>San Luis Obispo</span>
                <span className='contact-info-item'>California</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
