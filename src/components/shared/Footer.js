import React from 'react'
import instagram from 'src/images/instagram.svg';
import location from 'src/images/location.svg';
import whatsapp from 'src/images/whatsapp.svg';
import './Footer.scss'

function Footer() {
  return (
    <footer className='footer-container container text-white'>
      <div className='flex'>
        <div className='footer-logo-container'>
          <img src='streetcrownLogo.png' />
        </div>
        <div className='sub-footer-container px-6'>
          <h4 className='footer-header-text'>JAKARTA</h4>
          <div className='icon-container flex items-center py-3'>
            <img src={whatsapp} alt='whatsapp' className='footer-icon svg-white' />
            <span className='ml-4 text-sm'>0812-8870-4003 (Rei)</span>
          </div>
          <div className='icon-container flex items-center py-3'>
            <img src={instagram} alt='instagram' className='footer-icon svg-white' />
            <span className='ml-4 text-sm'>streetcrown.detailing</span>
          </div>
          <div className='icon-container flex items-center py-3'>
            <img src={location} alt='location' className='footer-icon svg-white' />
            <span className='ml-4 text-sm'> Jl. Sunter Pulo Kecil No.18, Jakarta Utara</span>
          </div>
        </div>
        <div className='sub-footer-container'>
          <h4 className='footer-header-text'>BANDUNG</h4>
          <div className='icon-container flex items-center py-3'>
            <img src={whatsapp} alt='whatsapp' className='footer-icon svg-white' />
            <span className='ml-4 text-sm'>0851-0836-6633 (William)</span>
          </div>
          <div className='icon-container flex items-center py-3'>
            <img src={instagram} alt='instagram' className='footer-icon svg-white' />
            <span className='ml-4 text-sm'>streetcrown.detailing</span>
          </div>
          <div className='icon-container flex items-center py-3'>
            <img src={location} alt='location' className='footer-icon svg-white' />
            <span className='ml-4 text-sm'>Jl. Taman Kopo Indah No.10, Bandung</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
