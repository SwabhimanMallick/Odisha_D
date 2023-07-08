import React,{useState} from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {CgMenu} from 'react-icons/cg'
import OTlogo from '../../assets/OTlogo.png'
import {BiHomeAlt2} from 'react-icons/bi'
import {FiPackage} from 'react-icons/fi'
import {RiHotelLine} from 'react-icons/ri'
import {PiAirplaneTilt} from 'react-icons/pi'
import {PiTrain} from 'react-icons/pi'
import {MdConnectWithoutContact} from 'react-icons/md'
import {IoMdInformationCircleOutline} from 'react-icons/io'




const Navbar = () => {
  const [active, setActive] = useState('navBar')
  
  //Func that shows navBar
  const showNav =() =>{
    setActive('navBar activeNavbar')
  }

  //Func to remove navBar
  const removeNavbar = ()=>{
    setActive('navBar ')
  }

  return (
    <section className="navBarSection">


      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1><SiYourtraveldottv className="icon"/>  OdishaDarshan.</h1>
            <div className="flex"><h5>powered by</h5>
              <a href='https://odishatourism.gov.in/'>
                <img src={OTlogo}></img>
              </a>
            </div>
            
          </a>
        </div>

        <div className={active}>
            <ul className="navLists flex">

              <li className="navItem">
                <a href="#" className="navLink"><BiHomeAlt2 className='icon'/>Home</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink"><FiPackage className='icon'/>Packages</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink"><RiHotelLine className='icon'/>Hotels</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink"><PiAirplaneTilt className='icon'/>Flights</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink"><PiTrain className='icon'/>Trains</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink"><MdConnectWithoutContact className='icon'/>Contact</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink"><IoMdInformationCircleOutline className='icon'/>About us</a>
              </li>

              <button className='btn'>
                <a href="#" >VIEW CART</a>
              </button>

              <div onClick={removeNavbar}className="closeNavbar">
                <AiFillCloseCircle className="icon"/>
              </div>

            </ul>

        </div>

        <div onClick={showNav}className="toggleNavbar">
                <CgMenu className="icon"/>
              </div>
      </header>
    </section>
  )
}

export default Navbar