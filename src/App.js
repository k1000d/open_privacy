import "./App.css";
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Ale from "./ale";
import Busc from "./busc";
import Bus from "./bus";
import Regist from "./regist";
/* import BarChart from "./BarChart"; */
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns'; 
import Card from 'react-bootstrap/Card';
import Sesion from "./sesion";
import Inicio from "./inicio";
import Figure from 'react-bootstrap/Figure';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';






//ejecutar una vez la pagina, importamos useefect
import {useState} from 'react';
//el useEFFECT con una funcion con [array] si queremos que se ejecute solo una vez.
//y sino con una variable dentro que cuando cambie se repetira la función.







function App() {
  
const [mensaje, setMensaje]= useState ("")
 

const [buscare, setBuscare]= useState([])
 
  


  //Para darle valor a lo que introduce el usuario y cambie.

const registrar = (text, password, nombre, voto) => {
  fetch ("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    },
      body: JSON.stringify({email:text,password: password, nombre: nombre, voto:voto})
    }).then((res)=> res.json()).then((res)=>{console.log(res);setMensaje(res.mensaje)})
  
}

const buscar = (name) => {
  fetch ("http://localhost:3000/clientes/"+ name).then ((res)=> res.json()).then((res)=>{
    setBuscare(res)
    console.log(res)})
}
const mostrar = buscare.map((cliente) => {
  return (   
    <div>
      <h1>{cliente.name}</h1>
     
    </div>
 
)})

const login = (text, password) => {
  fetch ("http://localhost:3000/api/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify({email: text, password:password})
  }).then ((res)=> res.json()).then((res)=>{console.log(res)})
}
 

function Main (){
  return (
    <main>
       <div id="cont">
           
           <p>TUS DATOS, TU PRIVACIDAD
               OPEN PRIVACY </p> 
               
           </div>
          
          <div id="contenedor2">
           <p>¿Qué es open privacy? Tus búsquedas, descargas, likes, subscripciones, sirven para muchas empresas, una información que se registra y se utiliza con unos intereses que ni tú entiendes y que aprobaste por una accesibilidad. Open privacy defiende que tener acceso al control de tus actividades y la distribución comercial de tus datos es un derecho humano. Open priacy te ofrece realizar un seguimiento de tus datos así como la posibilidad de vender, comprar o ganar dinero con tus datos.
                 </p>
                </div>
              
                 
          <div id="contenedor3">
            <div id="titulo_usuarios">
              <p>USUARIOS</p>
            </div>
          <p> 
          <div>
          <img src="/images/silvia.png" alt="" width="199"/>
          </div>
            Clara
              "Yo estoy contecta con open privacy me puedo pagar los estudios ya que al dia estoy unas 10 horas delante del ordenador XD.</p>
             <p>
               <div>
              <img src="/images/sergio.png" alt="" width="200"/>
              </div>
              
              Jorge 
              "Me gusta pensar que inteligencias artificiales me pagan por ofrecerle mis conocimientos"
              </p>
              <p>
              <div>
              <img src="/images/jorge.png" alt="" width="180"/>
              </div>
              Leo 
              "Realmente util y facil de usar, estuve un tiempo preocupado porque hace tiempo me hackearon el ordenador y a travez de open privacy pude borrarme del mapa " 
              Jorge 
              
          </p>
          </div>
         
          <div id="Productos">
          <div id="titulo_productos">
               <p>PRODUCTOS</p>
               </div>
             <div id="contenido_productos">
               <div div="imagen">
                <img src="/images/vigilancia.jpg" alt="" width="500"/>
               </div>
               
               <p>
               La API de Open Privacy ha sido utilizada por más de 800 empresas en 40 países. Con solo agregar códigos de muestra a su sitio web, puede integrar la IA de control con sus productos y servicios. Con un programa que envía archivos a la API, es compatible con varias plataformas como Windows, iOS y Android OS, funcionando con 'machine learning'. Para obtener más detalles, haga clic en el enlace a continuación.
               </p>

             </div>

          </div>

         <div id="empresas"></div>
    </main>
  )
}

function Nosotros (){
  return( 
    
    <div id="regist">
      <Link to= "/nosotros">NOSOTROS</Link>
    </div>
 
  )
}

function Nosotras (){
  return(
  
    <Figure>
      <div id="equipo">
   <p>EL EQUIPO</p>
 </div>
    <div id="workers">
    
<Figure.Image
  width={900}
  height={380}
  alt="100x180"
  src="/images/workers.jpg"
/>
 </div>

 <div id="texto">
   <p>Somos un líderes mundiales en control de datos. Tenemos la misión de desarrollar y proporcionar tecnología de IA con el fin de crear una sociedad donde todas las personas puedan entenderse y ayudarse mutuamente, pensamos que que el control de datos es un derecho que debe ser transaparente y individual. Siempre estamos buscando talentos excepcionales que quieran desarrollar soluciones basadas en la empatía para problemas desafiantes en múltiples sectores empresariales como
robótica, interfaz de voz, automóviles y atención médica.</p>
 </div>
</Figure>
    
  
    
  )
}


function Footer () {
  return (
    <footer>
      <div id="foot">
      
    
   
   <img src="/images/logo1.png" alt=""/>

   

      </div>
      <div id="contenido_footer">

        <ul>
          <li>Contacto</li>
          <li>Politica de Privacidad</li>
          <li>Politica de uso</li>
          
        </ul>
        <div id="derechos">
          <p>© Open Privacy Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
  





  

  return (
    
  <BrowserRouter>
  <P5Wrapper sketch={sketch} />
  <Link to= "/">
    
  
  <div id="imagen">
    
   
   <img src="/images/logo1.png" alt=""/>

   </div>
   
   </Link>
  
 
 
 
  <div id="barra">
  <Regist/>
  <Sesion/>
  <Busc/>
  <Nosotros/>
  </div>

  <Route exact path ="/nosotros">
  <Nosotras/>
  </Route>

  <Route exact path ="/buscarte">

    
    
    <CardColumns>
    <Card>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{mostrar}</Card.Title>
        <Card.Text>
        
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      
      </Card.Footer>
    </Card>
    
      </CardColumns>
      
 
  <Bus buscar={buscar}/>
  
  </Route>

  <Route exact path = "/iniciosesion">
  <Inicio login={login}/>
{/*   <BarChart/> */}
  </Route>
 
  <Route exact path = "/registro">
  <Ale registrar={registrar} mensaje={mensaje}/>
 
  
  </Route>
 
  

<Route exact path ="/">
  <Main />
 
</Route>
<Footer/>
  </BrowserRouter>
  
  )
}




export default App;
