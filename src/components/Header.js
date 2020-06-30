import React from 'react'
import './Header.css'
import {FiMenu} from 'react-icons/fi'

class Header extends React.Component {
  // componentDidMount(){
  //   const menuItems=document.getElementsByTagName('div')
  //   let clicked=false
  //   for (var li of menuItems) {
  //     li.addEventListener('click',()=>{
  //       console.log('Clicked');
  //     })
  //   }
  // }
  render(){
    return(
      <nav className="Header navbar navbar-expand-md bg-black">
  	    <div className="container">
  	      <a className="navbar-brand" href="index.html">FreshFoods</a>
  	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
  	        <span className="oi oi-menu"><FiMenu color="#CACACA"/></span> Menu
  	      </button>

  	      <div className="collapse navbar-collapse" id="ftco-nav">
  	        <ul className="navbar-nav ml-auto">
  	          <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
  	          <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                	<a className="dropdown-item" href="shop.html">All</a>
                	<a className="dropdown-item" href="wishlist.html">Fruits and Veges</a>
                  <a className="dropdown-item" href="product-single.html">Nuts</a>
                  <a className="dropdown-item" href="cart.html">Cereals</a>
                  <a className="dropdown-item" href="checkout.html">Juices</a>
                  <a className="dropdown-item" href="checkout.html">Spices</a>
                </div>
              </li>
  	          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
  	          <li className="nav-item"><a href="blog.html" className="nav-link">Journal</a></li>
  	          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Cart[0]</a></li>
  	        </ul>
  	      </div>
  	    </div>
  	  </nav>
    )
  }
}

export default Header
