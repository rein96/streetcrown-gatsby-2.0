import React from "react"
import './Hero.scss'

const Hero = () => (
  <section className="hero-container relative flex-center-center">
    <section className='hero-content absolute text-center font-semibold text-white'>
      <h1 className='streetcrown-title-h1 text-xl lg:text-2xl'>
        <span className='color-red-ds'>StreetCrown</span> | Professional Auto Detailer
      </h1>
      <h2 className='streetcrown-slogan-large text-5xl lg:text-6xl'>
        <span className='color-red-ds'>Shiny</span> <span>inside</span> <span className='color-red-ds'>Shiny</span> <span>outside</span>
      </h2>
      <h2 className='streetcrown-slogan-mobile'>
        <div className='text-left'>
          <span className='color-red-ds'>Shiny</span> <span>inside</span>
        </div>
        <div className='text-right'>
          <span className='color-red-ds'>Shiny</span> <span>outside</span>
        </div>
      </h2>
      <button className='absolute btnStyle btn-float btn-md background-red-ds mt-8'>Book Now</button>
    </section>
    <img alt="Logo" className="hero-image hero-portrait" src="hero-portrait.jpg" />
    <img alt="Logo" className="hero-image hero-landscape" src="hero-background-compressed.jpg" />
  </section>
)


export default Hero
