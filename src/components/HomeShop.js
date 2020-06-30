import React from 'react'

class HomeShop extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div className='category col-3 border bg-warning my-4' style={{height:'150px'}}>
        <div className='overlay'>
          <span>Eye</span>
          <span>Cart</span>
          <span>Love</span>
        </div>
        <img/>
        <h6>{this.props.name}</h6>
        <p>{this.props.price}</p>
      </div>
    )
  }

}

export default HomeShop
