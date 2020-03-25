import React from 'react';
import ReactDOM from 'react-dom';

function Monitor(){
  let polegadas = "15 inches";
  let cor = "Red";
  return <div> 
  <h3> My monitor : </h3> 
  <h4>Inches: {polegadas}</h4>
  <h4>Color: {cor}</h4>
  </div>

}

/* 
Não funcional.
*/

export default Monitor();
