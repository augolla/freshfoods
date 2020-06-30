import React from 'react'

function HomeStrip() {
  const divStyle={display:'flex',justifyContent:'center',marginBottom:'120px',marginTop:'50px'}
  const circleStyle={width:'50px',height:'50px'}
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-3' style={divStyle}>
          <div style={circleStyle}>Free Shipping</div>
        </div>
        <div className='col-3' style={divStyle}>
          <div style={circleStyle}>Fresh on Arrival</div>
        </div>
        <div className='col-3' style={divStyle}>
          <div style={circleStyle}>Superior Qua;ity</div>
        </div>
        <div className='col-3' style={divStyle}>
          <div style={circleStyle}>Round Service</div>
        </div>
      </div>
    </div>
  )
}

export default HomeStrip
