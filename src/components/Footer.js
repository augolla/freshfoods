import React from 'react'

function Footer() {
  return(
    <div className='container bg-secondary mb-5'>
      <div className='row pt-5' >
        <div className='col-6' style={{height:'200px'}}>
          <h2>FreshFoods</h2>
        </div>
        <div className='col-6' style={{height:'200px'}}>
          <h4>Customer Care</h4>
          <ul>
            <li>Shipping and Delivery</li>
            <li>Services</li>
            <li>Returns</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className='col-6' style={{height:'200px'}}>
          <h4>Information</h4>
          <ul>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Journal</li>
            <li>Recommendations</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <p>Copyright ©2020 All rights reserved | Website developed by Divonn</p>
    </div>
  )
}

export default Footer
