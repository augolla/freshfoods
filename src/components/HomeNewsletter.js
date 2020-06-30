import React from 'react'

function HomeNewsletter() {
  return (
    <div className='container mb-4'>
      <div className='row ' style={{background:"#F7F6F2"}}>
        <div className='w-50 ml-5 m-5'>
          <h4>Subscribe to Our News Letter</h4>
          <p>Get The latest updates on special offers,discounts,promotions and pro tips from our chef</p>
        </div>
        <div className='col mr-5 m-5'>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNewsletter
