import React, { useEffect, useState } from 'react'
import "./Nav.css"

const Nav = () => {
    const [show, handleShow] = useState(false);

    const handleNavbarTransition = () => {
        if(window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleNavbarTransition);

        return () => window.removeEventListener("scroll", handleNavbarTransition);
    }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
            
        <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo" />
        <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
        </div>
    </div>
  )
}

export default Nav