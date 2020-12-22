import React from 'react'

function SectionTitle({ firstWords = 'Our', secondWords, className = '' }) {
  return (
    <h3 className={`relative text-center text-white text-xl font-medium letter-spacing-1px ${className}`}>
      {firstWords} <span className='color-red-ds'>{secondWords}</span>
    </h3>
  )
}

export default SectionTitle
