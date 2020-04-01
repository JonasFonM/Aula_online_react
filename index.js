import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Computador from './Computador';
import './style.css';
import Monitor from './Monitor';


function Monitor(props){
  
  return (<div> 
  <h3> My monitor : </h3> 
  <h4>Inches: {props.inches}</h4>
  <h4>Brand: {props.brand}</h4>
  </div>
 )
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      propbrand: "LG",
      propinches: "12 in"
    };
  }

monitorshift = () => {
    this.setState({propinches: '15 in'});
    this.setState({propbrand: 'Acer'});
  }



  render() {
    return (
      <div>
      <Computador processador = 'Intel Core i5-7200U' memoria = "8GB DDR3"  HD = "500GB" cor = "Black" />
     
      <Monitor inches={this.state.propinches} brand={this.state.propbrand} />
        
        <button type='buton' onClick={this.monitorshift}>Mudar Monitor</button>

      </div>
      

    );
  }
}
 


render(<App />, document.getElementById('root'));
