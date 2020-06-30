import React,{Component} from 'react'

class Shop extends Component {
  constructor(){
    super()
  }
  filterSelection=(e)=>{
    let i=2
    console.log(e.target.className);
    const col3=document.querySelectorAll('.col-3');
    col3.forEach((div, i) => {
      switch (div.id) {
        case '100':
          div.style.background='red'
          break;
        case '200':
          div.style.display='none'
          break;
        case '300':
          div.style.background='green'
          break;
        case '400':
          div.style.background='pink'
          break;
        default:

      }
    });

  }
  render(){
    return(
      <div>
        <div className='jumbotron'></div>
        <div className="container d-flex justify-content-center mb-4">
          <button className="btn mr-3" onClick={this.filterSelection}>Show All</button>
          <button className="btn mr-3" onClick={this.filterSelection}>Fruits and Vegetables</button>
          <button className="btn mr-3" onClick={this.filterSelection}>Baked</button>
          <button className="btn mr-3" onClick={this.filterSelection}> Juices</button>
          <button className="btn mr-3" onClick={this.filterSelection}> Cereals and Nuts</button>
          <button className="btn mr-3" onClick={this.filterSelection}>Spices</button>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-3 border mb-2' id="100" style={{height:"160px"}}>100</div>
            <div className='col-3 border mb-2' id="100" style={{height:"160px"}}>100</div>
            <div className='col-3 border mb-2' id="200" style={{height:"160px"}}>200</div>
            <div className='col-3 border mb-2' id="300" style={{height:"160px"}}>300</div>
            <div className='col-3 border mb-2' id="100" style={{height:"160px"}}>100</div>
            <div className='col-3 border mb-2' id="400" style={{height:"160px"}}>400</div>
            <div className='col-3 border mb-2' id="300" style={{height:"160px"}}>300</div>
            <div className='col-3 border mb-2' id="200" style={{height:"160px"}}>200</div>
            <div className='col-3 border mb-2' id="300" style={{height:"160px"}}>300</div>
            <div className='col-3 border mb-2' id="400" style={{height:"160px"}}>400</div>
            <div className='col-3 border mb-2' id="400" style={{height:"160px"}}>400</div>
            <div className='col-3 border mb-2' id="100" style={{height:"160px"}}>100</div>
            <div className='col-3 border mb-2' id="200" style={{height:"160px"}}>200</div>
            <div className='col-3 border mb-2' id="300" style={{height:"160px"}}>300</div>
            <div className='col-3 border mb-2' id="400" style={{height:"160px"}}>400</div>
            <div className='col-3 border mb-2' id="100" style={{height:"160px"}}>100</div>

          </div>
        </div>
      </div>
    )
  }

}

export default Shop
