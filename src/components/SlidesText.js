import React from 'react'
import './SlidesText.css'
import{Link,animateScroll as scroll} from 'react-scroll'

function SlideText() {
  return(
    <div className='SlidesText'style={{position:'relative',bottom:'800px'}}>
      <div className='d-flex justify-content-center'>
        <h1 style={{fontSize:'16vh'}}>100% Fresh and Organic Foods</h1>
      </div>
      <div className='d-flex justify-content-center'>
        <p style={{color:"#fff"}}>ONE STOP SHOP FOR ALL YOUR GROCERIES NEEDS</p>
      </div>
      <div className='d-flex justify-content-center'>
        <Link to='HomeCategory' smooth={true} offset={-70} spy={true} activeClass={true} duration={650}>
          <button className='btn'>
        View More
      </button></Link>
      </div>
    </div>
  )
}

export default SlideText
