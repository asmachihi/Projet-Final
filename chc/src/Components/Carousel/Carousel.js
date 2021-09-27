import React from 'react'
import './carousel.css'
import img1 from '../assets/ban1.jpg'
import img2 from '../assets/ban2.jpg'
import img3 from '../assets/ban3.jpg'
import img4 from '../assets/ban4.jpg'
import img5 from '../assets/ban5.jpg'
import banieree from '../assets/bantout.jpg'

export default function Carousel() {
    return (
        <div className="pic-ctn" >
        {/* <img src={img1} alt="" className="pic" style={{width:'99%',height:'77%'}} />
        <img src={img2} alt="" className="pic" style={{width:'99%',height:'77%'}}   />
        <img src={img3} alt="" className="pic" style={{width:'99%',height:'77%'}}  />
        <img src={img4} alt="" className="pic" style={{width:'99%',height:'77%'}} />
        <img src={img5} alt="" className="pic" style={{width:'99%',height:'77%'}} /> */}
        <img src={banieree} className="pic"  style={{width:'99%',height:'77%'}} />
      </div>
    )
}
