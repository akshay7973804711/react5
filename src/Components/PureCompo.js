import React, { Component } from 'react'
import './Style.css'


class PureCompo extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
  render() {
    console.log("Pure component is called!");  
    return (
      <div className='compo'>
        {this.state.count}<br></br>
        <button onClick={()=>this.setState({count:0})}>Increment</button>
      </div>
    )
  }
}
export default PureCompo