import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='nav'>
        <div className='nav-in'>
            <div>
                <a href="">Abstract</a>
                <a href="">Help Center</a>
            </div>
            <div>
                <a href="">Submit a request</a>
                <a href="">Sign in</a>
            </div>
        </div>
    </div>
  )
}

export default Header