import React from 'react';
import ReactDOM from 'react-dom';





class Computador extends React.Component {
    constructor (props){ 
      super(props);
      this.state = {processador : "Intel Core i5-6200U 2.3GHz", memoria : "4G3 DDR3 L", hd : "1000 GB HDD",cor : "Grey"};
    }
  computershift = () => {
    this.setState({cor: 'Red'});
    this.setState({memoria: '8G3 DDR3'});
    this.setState({processador: 'Intel Core i7-7200UQ'});
    this.setState({HD: '1 TB HDD'});
  }
    render () {
      return (
      <div> 
      
      <h1>Exemplo com props:</h1>
      <h2> This is my computer:</h2> 
      <h3> Color: {this.props.cor }</h3> 
      <h3> Memory: {this.props.memoria}  </h3> 
      <h3> CPU: {this.props.processador} </h3>
      <h3> HD: {this.props.HD} </h3>
  
      <h1>Exemplo com states:</h1>
      <h2> This is my computer:</h2> 
      <h3> Color: {this.state.cor }</h3> 
      <h3> Memory: {this.state.memoria}  </h3> 
      <h3> CPU: {this.state.processador} </h3>
      <h3> HD: {this.state.HD} </h3>
      
      <button type='buton' onClick={this.computershift}>Mudar Computador</button>

      </div>
      );
    }
  }



  ReactDOM.render(<Computador/>, document.getElementById('root'));

  export default Computador;
