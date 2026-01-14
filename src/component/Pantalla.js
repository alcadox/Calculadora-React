import '../styles/Pantalla.css'
// en este caso solo permito que se le pase como propiedad
// una propiedad llamada 'input', en este caso no valdría 'props'
const Pantalla = ({input}) => (
    <div
        // le indico el estilo que debe adaptar el componente
        className='input'
    >
        {input}
    </div>
);

export default Pantalla;