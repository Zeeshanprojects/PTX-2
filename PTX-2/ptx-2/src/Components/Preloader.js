import React from 'react'
import './Preloader.style.css'
import Image from '../Images/Image'
export default function Preloader() {
  return (
    <div className="preloader">
      <img src={Image.logo} alt="Logo" />
    </div>
  )
}
