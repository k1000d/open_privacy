import "./App.css";
import {useState} from "react";
import { Form, Button } from "react-bootstrap";


function Inicio (props) {
    const[password, setPassword]= useState("")

    const [text, settext] = useState ("");


    
    const handleEmail = (event) => {
      settext(event.target.value);
    }
    const handleContrasena = (event) => {
        setPassword(event.target.value);
      }
     
    return ( 
 
    <div id="registrostyle">
   <Form>
   <Form.Group controlId="formBasicEmail">
   <Form.Label>Email</Form.Label>
      <Form.Control input type= "text" placeholder="email" onChange={handleEmail} value= {text}/>
      </Form.Group>
  
      
      <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
      <Form.Control input type= "text" placeholder="contraseña" onChange={handleContrasena} value= {password}/>
      </Form.Group>

      
      <Button variant="outline-warning" type="submit" onClick={()=>props.login(text, password,)}>
    Enviar
  </Button>
      </Form>
    </div>
  
    )}

  export default Inicio;