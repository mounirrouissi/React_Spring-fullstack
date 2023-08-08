import React from 'react'
import { SiConsul } from 'react-icons/si'
import { MdSupportAgent } from 'react-icons/md'
import { PiAirplaneInFlightLight } from 'react-icons/pi'
function NavBar() {
  return (
    <div className='navbar'>
      <div className='navBarOne flex '>
        <div className='icon'><SiConsul /></div>
        <div className='icon'><MdSupportAgent /></div>
        <div className="navSign">
          <div className='btn'>Sign in</div>
          <div className='btn'>Sign up</div>
        </div>

      </div>
      <div className='navBarTwo flex'>
        <div className='logo' title="Welcome">
        <PiAirplaneInFlightLight/>
        </div>
        <ul className='menu flexRow'>
        <li><a>Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Offers</a></li>
        <li><a href="">Seats</a></li>
        <li><a href="">Destinations</a></li>
        </ul>
        <div className='contactBtn'>
        <button className='btn'>contact Us</button>
        </div>
        
      </div>
    </div>
  )
}

export default NavBar