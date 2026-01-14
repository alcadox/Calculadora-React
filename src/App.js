import './App.css';

import { useState } from 'react';
import { evaluate} from 'react';

import Boton from './component/Boton';
import BotonClear from './component/BotonClear';
import Pantalla from './component/Pantalla';


function App() {
  // creo una función llamada 'establecerInput' para concatenar
  // lo que muestra la pantalla de la calculadora, uso el hook 'useState'
  // para que recuerde el estado y se actualice en tiempo real
  const [input, establecerInput] = useState('');

  // funcion para añadir/concatenar valores a la operacion/pantalla de
  // la calculadora
  const agregarInput = val => {
    establecerInput(input + val);
  }

  // funcion para calcular el resultado de la operación
  const calcularResultado = () =>  {
    if (input){
      establecerInput(evaluate(input));
    } else { // si no existe valores
      alert("Por favor ingrese valores para realizar los cálculos.")
    }
  };

  // esto es lo que devuelve el componente App
  return (
    
    <div className="App">
      
      <div className='titulo-alcadox'>
        <h2>By: alcadox</h2>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => establecerInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
