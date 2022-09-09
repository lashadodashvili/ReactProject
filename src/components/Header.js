import React from 'react'
import Navigation from './Navigation'
import logo from '../image/logo.png'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='logo' />
      <Navigation />
    </div>
  )
}
