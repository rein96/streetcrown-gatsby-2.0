import React from "react"
import './Hero.scss'

const Hero = () => (
  <section className="hero-container flex-center-center">
    <section className='hero-content absolute text-center'>
      <h1 className='text-2xl text-white'>StreetCrown | Professional Auto Detailer</h1>
      <h2 className='text-6xl text-white'>Shiny inside Shiny outside </h2>
    </section>
    {/* <button className=''>Book Now</button> */}
    <img alt="Logo" className="hero-image" src="hero-background-compressed.jpg" />
  </section>
)


export default Hero
