import '../styles/Boton.css';

// boton para la calculadora
function Boton (props){
    // funcion que devuelve 'true' si no es un número excluyendo '.' y '='
    const esOperador = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div
            // aparte de aplicar el estilo general al boton (boton-contenedor) si el boton contiene un operador
            // también se le aplica el estilo .operador
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            
            // define la acción que realiza cuando el botón se pulsa
            //  en este caso llama a la funcion manejarClic pasandole el .children
            onClick={() => props.manejarClic(props.children)}
        >
            {props.children}
        </div>
    );
}

export default Boton;