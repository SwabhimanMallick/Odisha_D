import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import {RiSendPlaneFill} from 'react-icons/ri'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram } from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import {BiCopyright} from 'react-icons/bi'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})

  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video.mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>SUBSCRIBE TO US</small>
            <h3>Travel with us</h3>
          </div>

          <div className="inputDiv flex">
              <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
              <button className='btn flex' type='submit'>
                    SEND <RiSendPlaneFill className='icon'/>
              </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <SiYourtraveldottv className='icon'/> OdishaDarshan.
              </a>
            </div>

            <div data-aos='fade-up' className="footerParagraph">
            Explore Odisha with our travel website and embark on unforgettable adventures. Discover breathtaking destinations, immerse yourself in diverse cultures, and create cherished memories that last a lifetime. Our platform is designed to inspire and guide you in planning your dream vacations, whether it's a tropical beach getaway, an exhilarating city escape, or an off-the-beaten-path exploration.
            </div>

            <div data-aos='fade-up' className="footerSocials">
                <AiOutlineTwitter className='icon'/>
                <AiFillYoutube className='icon'/>
                <AiFillInstagram className='icon'/>
                <FaTripadvisor className='icon'/>
            </div>


          </div>

          <div className="footerLinks grid">

            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
                <span className='groupTitle'>
                    QUICK LINKS
                </span>
                
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Website
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Travel Guides
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Deals & Offers
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Payment
                </li>
            </div> 

            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                <span className='groupTitle'>
                    PARTNERS
                </span>
                
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  OdishaTourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Cars24x7
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  HotelsforU
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  TripAdvisor
                </li>
            </div>

           <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                <span className='groupTitle'>
                    ATTRACTIONS
                </span>
                
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Monuments
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Buddhist Sites
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Beaches
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Forest & Wildlife
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Arts & Crafts
                </li>
            </div>


          </div> 

          <div className="footerDiv flex">
            <small>||  ATITHI DEVO BHABA  ||</small>
              <div className="copyright flex">
                <BiCopyright className="icon"/>
                <small>COPYRIGHTS RESERVED -- OdishaDarshan PVT LTD.</small>
              <div/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer