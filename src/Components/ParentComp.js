import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: "Ruben"
    }
  }
  
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name: "Ruben"
      });
    }, 3000);
  }

  render() {
    console.log("Parent Comp render")
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
