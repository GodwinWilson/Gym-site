import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import './Header.css'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 835 ? true: false
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
      {(menuOpened ===false && mobile === true)?
        <div style={{backgroundColor:"var(--appColor)", padding:"0.5rem", borderRadius:"5px"}} onClick={()=>setMenuOpened(true)}>
          <img src={Bars} alt="" style={{height:"1.5rem", width:"2rem"}}/>
        </div> : <ul className='header-menu'>
                    <li >
                      <Link to="hero" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Home</Link>
                    </li>
                    <li >
                      <Link to="programs" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Programs</Link>
                    </li>
                    <li >
                      <Link to="reasons" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Why Us</Link>
                    </li>
                    <li >
                      <Link to="plans-container" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Plans</Link>
                    </li>
                    <li >
                      <Link to="testimonials" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Testimonials</Link>
                    </li>
                  </ul>
      }
        
    </div>
  )
}

export default Header