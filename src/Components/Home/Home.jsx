import React,{useEffect} from 'react'
import './home.css'
import video from '../../assets/video1.mp4'
import {GrLocation} from 'react-icons/gr'
import {TbSearch} from 'react-icons/tb'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {BiListUl} from 'react-icons/bi'
import {TbAppsFilled} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
        Aos.init({duration: 2000})

  }, [])

  return (
    <section className="home">

      <div className="overlay">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="homeContent container">

        <div className="textDiv">

          <span data-aos='fade-up' className="smallText">
            EXPLORE ODISHA
          </span>

          <h1 data-aos='fade-up' className="homeTitle">
            India's Best Kept Secret
          </h1>
        </div>

        <div data-aos='fade-up' className="cardDiv grid">

            <div className="destinationInput">
                <label htmlFor="city">Search your destination:</label>
              <div className="input flex">
                  <input type="text" placeholder="Where to ?"/>
                  <GrLocation claasName='icon'/>
              </div>
            </div>

            <div className="dateInput">
                <label htmlFor="date">Select your check-in date:</label>
              <div className="input flex">
                  <input type="date" />
              </div>
            </div>

            <div className="dateInput">
                <label htmlFor="date">Select your check-out date:</label>
              <div className="input flex">
                  <input type="date" />
              </div>
            </div>


           <div className="priceInput">

           <div className="label_total flex">
            <label>Choose mode of transport:</label>
          </div> 
          
           
            <div className="input flex">
              <select>
                <option value="">Mode of Transport</option>
                <option value="Flight">Flight</option>
                <option value="Train">Train</option>
                <option value="Bus">Bus</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
              </select>
            </div>

            <div className="searchOptions flex">
                <TbSearch className="icon"/>
                 <span>SEARCH</span>
            </div>

         </div>


      </div>

        <div data-aos='fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
              <FiFacebook className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
          </div>
          <div className="leftIcons">
              <BiListUl className="icon"/>
              <TbAppsFilled className="icon"/>
          </div>
        </div>

      </div>

      
          

     
      

    </section>
  )
}

export default Home