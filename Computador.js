import React from 'react';
import ReactDOM from 'react-dom';



class Computador extends React.Component {
  constructor(name) {
    super();
    this.state = {processador : "Intel Core i5-6200U 2.3GHz", memoria : "4G3 DDR3 L", hd : "1000 GB HDD"};}
    render(){
      return <h3>I have an {this.state.processador} {this.state.memoria} {this.state.hd} laptop computer</h3>
    }
  }
  ReactDOM.render(<Computador/>, document.getElementById('root'));

  export default Computador;
