import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTypo3 } from '@fortawesome/free-brands-svg-icons' 

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
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
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to="/"  className='social-logo'>TRVL
                <FontAwesomeIcon icon={faTypo3} />
            </Link>
          </div>
          <small className='website-rights'>TRVL © {year} </small>
        </div>
      </section>
    </div>
  )
}

export default Footer