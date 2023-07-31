'use client'
import Image from 'next/image'
import Link from 'next/link';
// import {close, menu} from '@/assets/indice';
import { navLinks, navLinksLeft, navLinksRight } from '@/constant/indice';
import { useState, useEffect } from 'react';
import { GiCapitol, GiPalmTree } from 'react-icons/gi';
// import { BiTrip } from 'react-icons/bi';
// import { SiJavascript } from 'react-icons/si';
// import { LiaUmbrellaBeachSolid } from 'react-icons/lia';



export function NavBar() {

  const [toggle, setToggle] = useState(false);

  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY > 50) {
        setScrolled(true)
      } else (
        setScrolled(false)
      )
    }

    window.addEventListener('scroll', onScroll);

    return ()=> window.addEventListener('scroll', onScroll)
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    
    <nav 
      className={` flex  items-center w-full  bg-primary-100 transition-all duration-[0.5s] fixed ease-in-out py-6 px-3 z-[999]  ${scrolled ? ' bg-opacity-40 backdrop-blur-md text-black' : 'text-white'}`}     //varia el scrolled aqui
    >
      {/* <div className=' ml-[25px] lg:ml-[55px] w-1/3 md:w-1/5 lg:w-1/5 xl:w-[14%]'>
        <Image src={logo} alt='logo'/>
      </div> */}

      <ul className=' w-full flex  justify-around items-center'>
          {navLinksLeft.map((nav, index)=>(
            <li
              key={nav.id}
              className= 'p-1 '
            >
              <Link 
                href={`${nav.url}`}
                className={` text-sm sm:text-base md:text-lg lg:text-xl ${activeLink === nav.id ? ' opacity-40' : ''}` } 
                onClick={()=>onUpdateActiveLink(`${nav.id}`)}
              >
                {nav.title}
              </Link>
            </li>
          ))}
      </ul>

      <div className={` w-[80px] md:w-[100px] transition-all duration-[0.5s] ${scrolled ? 'text-black' : 'text-white'}`}><GiPalmTree className='w-[100%] h-[100%] rounded-xl'/></div>

      <ul className=' w-full flex  justify-around items-center'>
          {navLinksRight.map((nav, index)=>(
            <li
              key={nav.id}
              className= 'p-1'
            >
              <Link 
                href={`#${nav.id}`}
                className={` text-sm sm:text-base md:text-lg lg:text-xl ${activeLink === nav.id ? ' opacity-40' : ''}` } 
                onClick={()=>onUpdateActiveLink(`${nav.id}`)}
              >
                {nav.title}
              </Link>
            </li>
          ))}
      </ul>

      {/* <div className=' md:hidden'>
        <Image 
          src={toggle? close : menu} 
          alt="menu"
          className='mr-4 w-[20px] h-[20px] object-contain cursor-pointer'
          onClick={()=> setToggle((prev)=>!prev)}
        />

        <div className={`${toggle ? ' absolute flex items-center justify-center top-[120px] right-0 min-w-[140px] animate-wiggle rounded-2xl bg-primary-100 py-6' : 'hidden'}`}>
            <ul className='flex items-center justify-center flex-col pl-0 m-1'>
              {navLinks.map((nav, index)=>(
              <li
                key={nav.id}
                className= {`${index === navLinks.length -1 ? "mr-0" : "mb-4"} text-white text-base`}
              >
                <a 
                  href={`#${nav.id}`}
                  className={activeLink === nav.id ? 'opacity-40' : '' } 
                  onClick={()=>onUpdateActiveLink(`${nav.id}`)}
                >
                  {nav.title}
                </a>
              </li>
              ))}
            </ul>
        </div>
      </div> */}

    </nav>                
  )
}
