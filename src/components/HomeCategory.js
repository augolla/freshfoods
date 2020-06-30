import React from 'react'
import './HomeCategory.css'
import fruits from './category-1.jpg'
import veges from './category-2.jpg'
import nuts from './category-3.jpg'
import juices from './category-4.jpg'


function HomeCategory() {
  return(
    <div id="HomeCategory">
      <div className='row mb-5'>
        <div className='imgDiv col-12 col-md-4' style={{height:'250px'}}>
          <img src={fruits}/>
          <div>Fruits</div>
        </div>
        <div className='imgDiv col-12 col-md-4 ' style={{height:'250px'}}>
          <img src={juices}/>
          <div>Fruits</div>
        </div>
        <div className='imgDiv col-12 col-md-4' style={{height:'250px'}}>
          <img src={veges}/>
          <div>Fruits</div>
        </div>
        <div className='imgDiv col-12 col-md-4' style={{height:'250px'}}>
          <img src={fruits}/>
          <div>Fruits</div>
        </div>
        <div className='imgDiv col-12 col-md-4' style={{height:'250px'}}>
          <img src={nuts}/>
          <div>Fruits</div>
        </div>
        <div className='imgDiv col-12 col-md-4' style={{height:'250px'}}>
          <img src={juices}/>
          <div>Fruits</div>
        </div>
      </div>
    </div>
  )
}

export default HomeCategory
