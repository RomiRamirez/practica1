import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props } from "../components/props/Props";


const nombre2='Pablo'
const lista = ['manzana', 'banana', 'pera', 'frutillas'];

const mostrarValor= valor =>{
    console.log(valor)
}


const Ejemplo1= props => {
    return (
     <div>
         <h1>Ejemplos de Propiedades</h1>
         {/* ejemplo de propiedad simple y la puedo reutilizar */}
         <Ejemplo1Props nombre='Romina'/>
         <Ejemplo1Props nombre={nombre2}/>
         <hr />
         {/* ejemplo de pasar lista de elementos */}
         <Ejemplo2Props elementos={lista}/> 
         <hr />
         {/* ejemplo de multiples variables y destructuring */}
         <Ejemplo3Props titulo="La Noticia" subtitulo="Soy el subtitulo de la noticia" cuerpo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto delectus nulla tempore ipsam, sint, officia molestias blanditiis soluta nam optio rerum doloribus dolor esse, molestiae sunt deleniti numquam! Odio!" />
         <hr />
         <Ejemplo4Props cambiarValor={mostrarValor} />

         <Ejemplo5Props eventoClick={mostrarValor}/>
         
     </div>
    ) 
}

export default Ejemplo1;