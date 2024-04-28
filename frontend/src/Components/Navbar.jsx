import headerLogo from '../assets/logo.png'
import hamburger from '../assets/hamburger.svg'
import iconClose from '../assets/iconclose.svg'

import { useState, useRef } from 'react'
import { navLinks, subLinks } from '../constants'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHover, setCurrentHover] = useState(null);
  const [activeLabel, setActiveLabel] = useState(null);
  const timeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Clear any existing timeout
    clearTimeout(timeoutRef.current);

    // Set timeout to automatically close menu after 3 seconds (adjust as needed)
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handleMouseEnter = (index) => {
    setCurrentHover(index)
  }

  const handleMouseLeave = () => {
    setCurrentHover(null)
  }

  const toggleLabel = (lable) => {
    setActiveLabel(activeLabel === lable ? null : lable)

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
        setActiveLabel(null);
    }, 3000)
  }

  return (
    <div>
      <header className="w-full  bg-white  z-10 fixed top-0 px-[20px]
         flex  justify-between items-center shadow-3xl">
        <nav className="flex  items-center justify-between pb-2
         lg:items-end flex-1
           gap-2">
            <div>
          <Link to={"/"} className='flex  justify-between items-center
           gap-0 font-bold font-montserrat 
           xl:text-[24px] max-xl:text-[18px] max-sm:text-20px text-[18px] '>
            <img src={headerLogo} width={120} height={120} className='max-sm:w-20' />
            ZION MISSION
            <br/>
             FOUNDATION
          </Link>
          </div>
          <div className='px-8'>
          <ul className='flex flex-1 justify-center   items-end
           gap-10 md:max-xl:gap-0 max-lg:hidden'>
            {navLinks.map((item, index) => (
              <li 
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className={`font-montserrt flex items-center  gap-1 
                  place-items-end
                   justify-between font-bold xl:px-0   px-2
                  xl:text-[16px]  lg:text-[12px] cursor-pointer
                  hover:scale-105 ease-in-out duration-1000
                   ${currentHover === index ? 'text-[#382ACF]' : ''}`}
                  onClick={() => toggleLabel(item.lable)}
                >
                  {item.lable} 
                  <FaAngleDown /> 
                </a>
                {/* Sublinks */}
                {activeLabel === item.lable && (
                  <div className="  absolute top-26  bg-white  left-68 mt-2  bg-opacity-90 leading-[60px]
                 shadow-3xl py-2 text-black px-6 rounded-lg   border-[5px]
                   hover:scale-105 ease-in-out duration-1000">
                    {subLinks.map((sublink, subIndex) => {
                      if (sublink.title === item.lable) {
                        return (
                          <ul key={subIndex}>
                            {sublink.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link to={link.link}  className=" 
                                 hover:text-gray-400    text-lg  
                                   text-right">
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )
                      }
                      return null
                    })}
                  </div>
                )}
              </li>
            ))}
          </ul>
          </div>
          <div className=' hidden max-lg:block '>
            <img
              src={isOpen ? iconClose : hamburger}
              alt='hamburger'
              width={25}
              height={25}
              className=' '
              onClick={toggleMenu}
              
            />
            {/* dropdown menu */}
            {isOpen && (
              <div className='w-full absolute left-0 top-20 md:top-36 
                 max-md: px-3 py-3 
               bg-white '>
                {navLinks.map((item, index) => (
                  <li key={index} className='block  text-[16px] py-3 px-1'
                  onMouseEnter={() =>handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}>
                    <a href={item.href} className='font-montserrt font-medium
                     xl:text-[24px] lg:text[20px] hover:text-[#382ACF] '
                     onClick={() =>toggleLabel(item.lable)}
                     >
                      {item.lable}
                    </a>
                    {/* sublinks */}
                    {activeLabel === item.lable && (
                        <div className=' w-48  right-2 mt-2 
                        leading-[40px] bg-white bg-opacity-90 text-black shadow-3xl 
                        py-2 px-2 rounded-lg 
                        hover:scale-105 ease-in-out duration-500 border-[3px]
                        ' >
                    {subLinks.map((sublink, subIndex) => {
                        if(sublink.title === item.lable) {
                           return (
                            <ul key={subIndex}>
                                {sublink.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link to={link.link} className='font-semibold text-sm
                                         hover:text-[#382ACF] '>
                                        {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                           )
                        }
                        return null;
                    })}
                    </div>
                )}
                  </li>
                ))}
              </div>
            )}
          </div>
          <div className='hidden '>
          <a href="https://forms.gle/zQbyWgtwZBPvbrES6  " target='_blank' 
          className="flex justify-center items-center 
          px-7 py-4 text-xl leading-none 
          font-bold rounded-full text-white bg-[#382ACF]">
            Subscribe
          </a>
        </div>
        <div className='absolute right-12 top-8 max-lg:top-16 max-lg:right-32  max-sm:hidden max-md:block' >
        <Link to='/donation' className=' text-2xl max-lg:text-2xl py-2 px-6 shadow-3xl text-white 
         rounded-lg  bg-[#3D496F]'>SUPPORT A  CAUSE</Link>
        </div>
        
        </nav>
       
      </header>
    </div>
  )
}

export default Navbar