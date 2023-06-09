import './Footer.css'
import React from 'react'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className='footer'>
            <div className='socials'>
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
            </div>
            <div className='logo-f'>
                <img src={Logo} alt="" />
            </div>
        </div>
        <div className='blur footer-blur-1'></div>
        <div className='blur footer-blur-2'></div>
    </div>
  )
}

export default Footer