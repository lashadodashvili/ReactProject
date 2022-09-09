import React from 'react'
import facebook1 from '../image/facebook.png'
import instagram from '../image/instagram.png'
import twitter from '../image/twitter.png'
import logo from '../image/logo.png'
import phone from '../image/call.png'
import email from '../image/email.png'
import place from '../image/place.png'


import './Footer.css';


export default function Footer() {
  return (
    <div className="Footer">
      <div className='addres'>
        <img style={{ width: '100px', height: '100px' }} src={logo} alt={logo} />
        <h1> <img style={{ width: '20px', height: '20px' }} src={place} alt="Place" /><a target='_blank' rel="noreferrer noopener" href='https://www.google.com/maps?ll=42.020876,43.480625&z=15&t=m&hl=en&gl=GE&mapclient=embed&q=Phona'>View Map</a></h1>
        <h2> <img style={{ width: '20px', height: '20px' }} src={phone} alt="phone" /> +995 55 55 55</h2>
        <h3>  lasha.dodashvili<img style={{ width: '20px', height: '20px' }} src={email} alt="email" />gmail.com</h3>
        <h4>Opening hours:</h4>
        <h5>Mon - Sun: 09.00 - 22.00</h5>

      </div>
      <div className="footer-nav">
        <a target='_blank' rel="noreferrer noopener" href='https://www.facebook.com/' ><img style={{ width: '50px', height: '50px', }} src={facebook1} alt='Facebook' /></a>
        <a target='_blank' rel="noreferrer noopener" href='https://www.instagram.com/' ><img style={{ width: '50px', height: '50px', }} src={instagram} alt='instagram' /></a>
        <a target='_blank' rel="noreferrer noopener" href='https://twitter.com/?lang=en' ><img style={{ width: '50px', height: '50px', }} src={twitter} alt='twitter' /></a>
      </div>


    </div>


  )
}
