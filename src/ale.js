import "./App.css";
import {useState} from "react";
import { Form, Row, Col, Button} from "react-bootstrap";
//import { Form } from "react-bootstrap";


function Ale (props) {
    const[password, setPassword]= useState("")
    const[nombre, setNombre]= useState("")
    const [text, settext] = useState ("");


    
    const handleEmail = (event) => {
      settext(event.target.value);
    }
    const handleContrasena = (event) => {
        setPassword(event.target.value);
      }
      const handleNombre = (event) => {
        setNombre(event.target.value);
      }
    return ( <div id="registra">
 <Form>
   <Form.Group as={Row} controlId="formPlaintextPassword">

    <Form.Label column sm="4">
      Nombre 
    </Form.Label>
    <Col sm="100">
      <Form.Control input type= "text" placeholder="nombre" onChange={handleNombre} value= {nombre}/>
    </Col>
  </Form.Group>

   <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="4">
      Email
    </Form.Label>
    <Col sm="100">
      <Form.Control input type= "text" placeholder="email" onChange={handleEmail} value= {text}/>
      </Col>
      </Form.Group>
     <Form.Group as={Row} controlId="formPlaintextPassword">
     <Form.Label column sm="4">
      Contraseña
    </Form.Label>
     <Col sm="8">
      <Form.Control input type= "text" placeholder="contraseña" onChange={handleContrasena} value= {password}/>
      </Col>
      </Form.Group>
      
       
      
      <Button variant="outline-dark" onClick={()=>props.registrar(text, password, nombre)}>enviar</Button>
  
    
  </Form>
  <p>
    {props.mensaje}
  </p>
  </div>
  
    )}


  export default Ale;