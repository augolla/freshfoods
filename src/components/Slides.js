import React,{useState} from 'react'
import './Slides.css'
import $ from 'jquery'
import Veges from './bg_1.jpg'
import VegesFruits1 from './bg_2.jpg'
import VegesFruits2 from './FruitsMain3.jpg'
import Baked1 from './mainBaked1.jpg'
import Juices1 from './mainJuices1.jpg'
import Spices1 from './mainSpice4.jpg'




class Slides extends React.Component {
  constructor() {
    super()
  }
  componentDidMount(){
    $(".slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('.slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('.slideshow');
    },4500);
  }

  render(){
    return(
      <div>
        <div className="slideshow w-100">
           <div className='img1'>
             <img style={{width:'100%',height:'700px'}} src={Veges}/>
           </div>
           <div className='img2'>
             <img style={{width:'100%',height:'700px'}} src={VegesFruits1}/>
           </div>
           <div className='img3'>
             <img style={{width:'100%',height:'700px'}} src={Baked1}/>
           </div>
           <div className='img4'>
             <img style={{width:'100%',height:'700px'}} src={VegesFruits2}/>
           </div>
           <div className='img5'>
             <img style={{width:'100%',height:'700px'}} src={Juices1}/>
           </div>
           <div className='img6'>
             <img style={{width:'100%',height:'700px'}} src={Spices1}/>
           </div>
      </div>
    </div>
    )
  }
}


export default Slides
