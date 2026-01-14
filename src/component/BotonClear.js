import '../styles/BotonClear.css';

// definimos el botonClear para la calculadora de la forma moderna (const)
const BotonClear = (props) =>(
    <div 
        // indicamos la clase del estilo
        className='boton-clear'
        // indicamos el comportamiento al pulsar el boton el cual llama a la funcion manejarClear
        onClick={props.manejarClear}
    >
        {props.children}
    </div>
);

export default BotonClear;