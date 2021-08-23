import "./App.css";
import {useState} from "react";
import { Form, Row, Col, Button} from "react-bootstrap";
//import { Form } from "react-bootstrap";


function Ale (props) {
    const[password, setPassword]= useState("")
    const[nombre, setNombre]= useState("")
    const [text, settext] = useState ("");
    const[voto, setVoto]= useState("")
    const[banco, setBanco]= useState("")
    const[social, setSocial]= useState("")
    const[direccion, setDireccion]= useState("")
    const [dinero, setDinero]= useState("")

    const handleVoto = (event) => {
      setVoto(event.target.value);
    }
    const handleEmail = (event) => {
      settext(event.target.value);
    }
    const handleContrasena = (event) => {
        setPassword(event.target.value);
      }
      const handleNombre = (event) => {
        setNombre(event.target.value);
      }

      const handleSocial = (event) => {
        setSocial(event.target.value);
      }
      const handleDireccion = (event) => {
        setDireccion(event.target.value);
      }
      const handleBanco = (event) => {
        setBanco(event.target.value);
      }

      const handleDinero = (event) => {
        setDinero(event.target.value);
      }
     
    return ( <div id="registra">

      <div>

      </div>
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
      <Form.Group as={Row} controlId="formPlaintextPassword">

    <Form.Label column sm="4">
      ¿A quien votaras en las proximas elecciones?
    </Form.Label>
    <Col sm="100">
      <Form.Control input type= "text" placeholder="voto" onChange={handleVoto} value= {voto}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">

  <Form.Label column sm="4">
      TU Dirección
    </Form.Label>
    <Col sm="100">
      <Form.Control input type= "text" placeholder="dirección" onChange={handleDireccion} value= {direccion}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
  <Form.Label column sm="4">
      Redes sociales
    </Form.Label>
    <Col sm="100">
      <Form.Control input type= "text" placeholder="Insagram, linkedln, facebook..." onChange={handleSocial} value= {social}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
  <Form.Label column sm="4">
  Cuenta Bancaria
</Form.Label>
<Col sm="100">
  <Form.Control input type= "text" placeholder="ES-102-222-" onChange={handleBanco} value= {banco}/>
</Col>
</Form.Group>
<p>Si tiene más de una nos lo puede indicar más adelante</p>
<Form.Group as={Row} controlId="formPlaintextPassword">
<Form.Label column sm="4">
  ¿Por cuanto venderias estos datos que has rellenado?
</Form.Label>
<Col sm="100">
  <Form.Control input type= "text" placeholder="cantia en euros" onChange={handleDinero} value= {dinero}/>
</Col>
</Form.Group>
       
      
      <Button variant="outline-dark" onClick={()=>props.registrar(text, password, nombre, voto, banco, direccion, social, dinero)}>enviar</Button>
  

  </Form>
  <p>
    {props.mensaje}
  </p>
  </div>
  
    )}


  export default Ale;