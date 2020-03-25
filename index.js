import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Computador from './Computador';
import './style.css';
import Monitor from './Monitor';


function Monitor(){
  let polegadas = "15 inches";
  return <div> <h3> My monitor : </h3> <h4>Inches: {polegadas}</h4></div>

}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


  render() {
    return (
      <div>
      <Computador/>
      <Monitor/>
        
      </div>
      

    );
  }
}
 


render(<App />, document.getElementById('root'));
