import "./App.css";

import { Form, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { useState, useEffect} from "react";


function Bus (props) {
    
    const[nombre, setNombre]= useState("")

    const [data, setData] = useState([])



    useEffect(() => {
      fetch("http://localhost:3000/clientes")
      .then((res)=>res.json())
      .then((res)=>{
        setData(res);
      });
    });
   
    const mostrar = data.map((cliente) => {
      return (
        <div>
          <h1>{cliente.name}</h1>
        
        </div>
      )
    })
     
    
      
      const handleNombre = (event) => {
        setNombre(event.target.value);
      }
    return (

    
      <Form>
      <div id="buscar">
        <Form.Group>
          <Form.Label>BUSCAR USUARIOS DE OPENPRIVACY</Form.Label>
        <Form.Control input type= "text" placeholder="buscar usuario" onChange={handleNombre} value= {nombre}/>
        </Form.Group>
        <Button variant="outline-warning" onClick={()=>props.buscar(nombre)}>BUSCAR</Button>
        
  </div>
  
  
     <CardColumns>
     <Card  bg={"warning"} style={{ width: '18rem' }}>
     <Card.Img variant="top" src="/images/silvia.jpg" />
     <Card.Body>
       <Card.Title></Card.Title>
       <Card.Text>
       <ul class="list-group list-group-flush">
      <li class="list-group-item">{mostrar} </li>
      <li class="list-group-item">Apellidos xxxxxxxx</li>
      <li class="list-group-item">cuenta bancaria xxxxxxxx</li>
      <li class="list-group-item">redes sociales xxxxxxxx</li>
      <li class="list-group-item">subscripciones xxxxxxxx</li>
      
    </ul>
    <h1>Silvia ofrece estos datos por 100.000.000€</h1>
       </Card.Text>
       <Button variant="outline-dark">comprar</Button>
       <Button variant="outline-dark">invierte</Button>
     </Card.Body>
   </Card>
   </CardColumns>
   <CardColumns>
     <Card  bg={"warning"} style={{ width: '18rem' }}>
     <Card.Img variant="top" src="/images/silvia.jpg" />
     <Card.Body>
       <Card.Title>Silvia Bonet Gutierrez</Card.Title>
       <Card.Text>
       <ul class="list-group list-group-flush">
      <li class="list-group-item">Nombre XXXXXX</li>
      <li class="list-group-item">Apellidos xxxxxxxx</li>
      <li class="list-group-item">cuenta bancaria xxxxxxxx</li>
      <li class="list-group-item">redes sociales xxxxxxxx</li>
      <li class="list-group-item">subscripciones xxxxxxxx</li>
      Silvia ofrece estos datos por 100.000.000€
    </ul>
       </Card.Text>
       <Button variant="outline-dark">comprar</Button>
       <Button variant="outline-dark">invierte</Button>
     </Card.Body>
   </Card>
   </CardColumns>
   
   </Form> 
    
    )}

  export default Bus;

 