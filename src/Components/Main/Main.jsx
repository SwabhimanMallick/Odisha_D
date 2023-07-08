import React,{useEffect} from 'react'
import './main.css'
import {HiLocationMarker} from 'react-icons/hi'
import {BsCartCheck} from 'react-icons/bs'
import img from '../../assets/puri1.jpg'
import img2 from '../../assets/konarksun.jpg'
import img3 from '../../assets/chilika1.jpg'
import img4 from '../../assets/Koraputghats.jpg'
import img5 from '../../assets/simlipal1.jpg'
import img6 from '../../assets/lingaraj.jpg'
import img7 from '../../assets/malkangiri.jpg'
import img8 from '../../assets/bhitarkanika1.jpg'
import img9 from '../../assets/marine.jpg'
import img10 from '../../assets/mayurbhanj1.jpg'
import img11 from '../../assets/nrusinghanath.jpg'
import img12 from '../../assets/Dhaulitemple.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Jagannatha Temple',
    location: 'Puri',
    grade: 'ABODE OF PEACE',
    fees: '₹700',
    description:'Experience divine tranquility at Puri Jagannath Temple, a sacred pilgrimage site steeped in rich history and spirituality.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Konark Sun Temple',
    location: 'Konark, Puri',
    grade: 'CULTURAL SITE',
    fees: '₹700',
    description:'Experience divine tranquility at Konark Sun Temple, a sacred pilgrimage site steeped in rich history and architecture.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Chilika Lake Lagoon',
    location: 'Puri-Ganjam-Khordha',
    grade: 'BIRD-PARADISE',
    fees: '₹700',
    description:'Indulge in the breathtaking beauty of Chilika Lake, a serene paradise with its vast azure waters and thriving biodiversity.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Deomali, Eastern Ghats',
    location: 'Koraput',
    grade: 'PEACEFUL HEIGHTS',
    fees: '₹700',
    description:'Embark on an exhilarating journey through Eastern Ghats, Deomali, where breathtaking vistas and pristine wilderness await.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Simlipal National Park',
    location: 'Baripada',
    grade: 'NATURAL BIODIVERSITY',
    fees: '₹700',
    description:'Discover the untamed beauty of Simlipal National Park, a wildlife sanctuary teeming with rare flora and fauna.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Lingaraj Temple',
    location: 'Bhubaneswar',
    grade: 'SPIRITUAL CALMNESS',
    fees: '₹700',
    description:'Experience spiritual bliss at Lingaraj Temple, a sacred abode of Lord Shiva showcasing architectural grandeur.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Malkangiri',
    location: 'Malkangiri',
    grade: 'SOOTHING FALLS',
    fees: '₹700',
    description:'Immerse yourself in mesmerizing cascades of Waterfalls, a natural wonder that enchants with its sheer beauty and serenity.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Bhitarkanika National Park',
    location: 'Kendrapada',
    grade: 'CROCODILE LAKES',
    fees: '₹700',
    description:'Embark on an adventure into the wild at Bhitarkanika National Park, a biodiverse haven with lush mangrove forests.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Marine Drive',
    location: 'Puri-Konark',
    grade: 'TRANQUIL SERENITY',
    fees: '₹700',
    description:'Embark on a scenic coastal journey along the Marine Drive, where azure waters create an enchanting road trip experience.'
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Mayurbhanj',
    location: 'Mayurbhanj',
    grade: 'ROAD LESS TRAVERSED',
    fees: '₹700',
    description:'Discover the enchanting charm of Mayurbhanj roads, winding through serene countryside, offering a captivating journey for explorers.'
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: 'Nrusinghanath Temple',
    location: 'Bargarh',
    grade: 'SPIRITUAL CALMNESS',
    fees: '₹700',
    description:'Uncover divine tranquility at Nrusinghanath Temple, an ancient abode of Lord Vishnu nestled amidst scenic hills, radiating spiritual serenity.'
  },
  {
    id: 12,
    imgSrc: img12,
    destTitle: 'Dhauli Shanti Stupa',
    location: 'Bhubaneswar',
    grade: 'SERENITY OASIS ',
    fees: '₹700',
    description:'Experience inner peace and serenity at Dhauli Shanti Stupa, a symbol of peace and harmony, nestled amidst picturesque surroundings.'
  }
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})

  }, [])


  return (
    <section className="main container section">
        <div className="secTitle">
          <h3 data-aos='fade-right'className="title">
            Popular Travel Destinations
          </h3>
        </div>

        <div className="secContent grid">
          {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                return(
                  <div key={id} data-aos='fade-up' className="singleDestination">

                      <div className="imgDiv">
                              <img src={imgSrc} alt={destTitle} />
                      </div>

                      <div className="cardInfo">
                        <h4 className="destTitle">
                          {destTitle}</h4>
                          <span className="continent flex">
                              <HiLocationMarker className='icon'/>
                              <span className="name">{location}</span>
                          </span>

                          <div className="fees flex">
                            <div className="grade">
                              <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                              <h5>{fees}</h5>
                            </div>
                          </div>


                          <div className="desc">
                            <p>{description}</p>
                          </div>

                          <button className="btn flex">
                            ADD TO CART <BsCartCheck className='icon'/>
                          </button>


                      </div>
                  </div>
                )
            })
          }
        </div>
    </section>
  )
}

export default Main