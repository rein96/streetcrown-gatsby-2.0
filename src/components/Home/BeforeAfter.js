import React, { useEffect } from 'react'
import BeerSlider from 'beerslider'
import logoBefore from 'src/images/logo-before.jpg'
import logoAfter from 'src/images/logo-after.jpg'
import closeBefore from 'src/images/close-before.jpg'
import closeAfter from 'src/images/close-after.jpg'
import './beerslider.css'
import SectionTitle from 'src/components/shared/SectionTitle.js'

function BeforeAfter() {

  useEffect(() => {
    new BeerSlider(document.getElementById('slider'));
    new BeerSlider(document.getElementById('slider-2'));
  }, [])
  
  return (
    <div className="before-after-container container" style={{ maxWidth: '700px' }}>
      <SectionTitle firstWords={'Our'} secondWords={'Before and After Portfolio'} className='mb-20 mt-20'/>
      <div id="slider" className="beer-slider shadow-lg br-20" data-beer-label="after">
        <img src={closeAfter} alt="after" />
        <div className="beer-reveal" data-beer-label="before">
          <img src={closeBefore} alt="before" />
        </div>
      </div>

      <div className="mb-20"></div>

      <div id="slider-2" className="beer-slider shadow-lg br-20" data-beer-label="after">
        <img src={logoAfter} alt="after" />
        <div className="beer-reveal" data-beer-label="before">
          <img src={logoBefore} alt="before" />
        </div>
      </div>

    </div>
  )
}

export default BeforeAfter
