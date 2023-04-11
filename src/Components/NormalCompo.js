import React, { Component } from 'react'
import './Style.css'

class NormalCompo extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
  render() {
    console.log("Normal component is called!");  
    return (
      <div className='compo'>
        {this.state.count}<br></br>
        <button onClick={()=>this.setState({count:0})}>Increment</button>
      </div>
    )
  }
}
export default NormalCompo