import React from "react"
import './Hero.scss'

const Hero = () => (
  <section className="hero-container flex-center-center">
    <section className='hero-content absolute text-center font-semibold text-white'>
      <h1 className='text-2xl'>
        <span className='color-red-ds'>StreetCrown</span> | Professional Auto Detailer
      </h1>
      <h2 className='text-6xl'>
        <span className='color-red-ds'>Shiny</span> inside <span className='color-red-ds'>Shiny</span> outside
      </h2>
    </section>
    {/* <button className=''>Book Now</button> */}
    <img alt="Logo" className="hero-image hero-portrait" src="hero-portrait.jpg" />
    <img alt="Logo" className="hero-image hero-landscape" src="hero-background-compressed.jpg" />
  </section>
)


export default Hero
