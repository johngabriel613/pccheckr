import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import logoLight from '../assets/logoLight.svg'
import { navLinks } from '../constants/data'


const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  };

  const handleLink = () => {
    if (nav) {
      setNav(!nav)
    }
  }

  const handleDropdown = () => {
    setDropdown(!dropdown)
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [nav]);

  return (
    <header className='relative z-10 py-6 md:py-0'>
      <nav className='container flex justify-between items-center'>
        <img src={logoLight} className='w-[150px]' alt="" />
        <FontAwesomeIcon icon={faBars} onClick={handleNav} className='cursor-pointer md:hidden' style={{width:24, height:24}}/>
        <ul className={`fixed flex flex-col gap-6 text-center text-xl font-semibold text-slate-600 uppercase top-0 left-0 w-full h-screen p-6 bg-gradient-to-b from-white via-white to-transparent transition-all duration-300 md:static md:text-start md:font-medium md:opacity-100 md:visible md:py-6 md:px-0 md:flex-row md:items-center md:w-fit md:h-full md:capitalize md:text-sm md:from-transparent ${!nav ? 'opacity-0 invisible top-[-100px]' : 'opacity-100 visible top-0'}`}>
        <FontAwesomeIcon icon={faXmark} onClick={handleNav} className='self-end cursor-pointer md:hidden' style={{width:24, height:24}}/>
          {navLinks.map((link, index) => (
            link.dropdowns ? (
              <li className='relative' key={link.name}>
                <div className='mb-2 cursor-pointer md:mb-0' onClick={handleDropdown}>
                  {link.name}
                  <FontAwesomeIcon icon={faChevronDown} className={`transition-all duration-300 ${!dropdown ? 'rotate-0' : 'rotate-180'}`}/>
                </div>
                <ul className={`grid gap-2 overflow-hidden transition-all duration-300 md:absolute md:right-0 md:top-[35px] md:bg-white md:py-6 md:px-8 md:rounded-lg md:shadow-lg md:border ${!dropdown ? 'h-0 md:h-fit md:opacity-0 md:invisible' : 'h-full md:h-fit md:opacity-100 md:visible'}`}>
                  {link.dropdowns.map(dropdown => (
                    <li key={dropdown.name}>
                      <Link to={dropdown.path} onClick={handleLink}>{dropdown.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.name} className={`${index == navLinks.length - 1 ? 'hidden cta smallbtn md:block ' : ''}`}>
                <Link to={link.path} onClick={handleLink}>{link.name}</Link>
              </li>
            )
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
