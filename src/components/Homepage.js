import React from 'react'
import './Homepage.css'
import HomeStrip from './HomeStrip'
import HomeCategory from './HomeCategory'
import HomeShop from './HomeShop'
import HomeNewsletter from './HomeNewsletter'
import Slides from './Slides'
import SlidesText from './SlidesText'
import Footer from './Footer'

function Homepage() {
  return(
    <div className='Homepage container-fluid p-0'>
      <Slides/>
      <div className='container'>
        <HomeStrip/>
        <SlidesText/>
        <div className='d-flex justify-content-center mb-4'>
          <button className='btn btn-primary'>Shop now</button>
        </div>
        <HomeCategory/>
        <h3>Today's Trending Products</h3>
        <div className='row'>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
          <HomeShop/>
        </div>
      </div>
      <HomeNewsletter/>
      <Footer/>
    </div>
  )
}

export default Homepage
