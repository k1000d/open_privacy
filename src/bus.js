import "./App.css";

import { Form, Button } from "react-bootstrap";
 import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'; 
import { useState, useEffect} from "react";


function Bus (props) {
    
    const[name, setName]= useState("")



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
     
    
      
      const handleName = (event) => {
        setName(event.target.value);
      }

   

    return( 

      <Form>
    

      <div id="buscar">
        <Form.Group>
          <Form.Label>BUSCAR USUARIOS DE OPENPRIVACY</Form.Label>
        <Form.Control input type= "text" placeholder="buscar usuario" onChange={handleName} value= {name}/>
        </Form.Group>
        <Button variant="outline-warning" onClick={()=>props.buscar(name)}>BUSCAR</Button>
        
         </div>
            <div id="usuarios">
      
         </div>

         <CardColumns>
      <Card>
        <Card.Img variant="top" src="https://static01.nyt.com/images/2021/01/27/business/29gamestop-ES-00/27GameStop-01sub-videoSixteenByNineJumbo1600.jpg" />
        <Card.Body>
          <Card.Title>GAMESTOP</Card.Title>
          <Card.Text>
            INVIERTE EN GAMESTOP Y CONSIGUE CAMBIAR LA BOLSA
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{mostrar[1]}</Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAPDxAQEBAQDw8NEBAQDw8ODxAQFREWFhUWFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mHyUtKy0tLystLSstKy0tLS0tLS0tLSstLS0tKy0tLS0tKystLS0rLS0tLSstLS0tLS0tLf/AABEIAMMBAgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQFAgMGBwj/xABBEAACAQMBBAcEBggFBQAAAAAAAQIDBBEhBRIxQQYTIlFhcYEHFDKRI0KhscHRM1JicpKi4fAVFlNzgiU0Q2Oy/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAJBEBAAICAgMAAgIDAAAAAAAAAAECAxEhMQQSQRMiMlFCYbH/2gAMAwEAAhEDEQA/APXBiTQ00AxgADDAGQCGAAMAGAhgAAAAAAMAEAwAQDABAMAEAAAhMyEAgGIBAxiYCEZCAQDADlKVzWj1i5JZi88Sb0eo1ZRVWpPLfLkiTS2XpJSeXLQm2VsqcFFcgN40CQwAYDAQ8AMAABgAh4AAMZyUVmTSS4t6I03t3GlFzl6Lm2cjtHac6jzJ6corgvI55MsUdsWG2SeF9ebepx0gt7xekf6lRcbdqy+tj93QpXJsagYr+TaXo08OkdrGO06mcqpL+Jk6229UXxYkvFf2zn5RwJSaK18iYWv4tZ+O9sdqU6umd2Xc/wAGTsHnlKv8zoNl7baxGprHhnjKP5o2Y80W7efl8ea9OjwLA4yTSaeU9U1wYzuzMRGQsAIBiAQYGAGIDYgEAxAIBgBiPAIYAMAABhgaAAGAAkMWQbAbZhOaSbeiSbb8BlX0irbtFrnNqPpxf3ETOo2tWNzpz22NoOrNvhFaRXcvzK16mLllm2msnmZLTMvaw0isag6dLJIVF9zN9tBEndz/AHg5xR1m6unRIlSBczitM4IFeHh4FbV0mLbQlob6VXBpnHBjGR1xy45Y26fo/tNxmqMn2Jt7mfqy7vJ6+p055sqjW7OPGElJejyejQllKS4NJr1PRx23Dyc1fWzMAQHRxJiZkIDEBsQAJjEAgATABiAAQxIYANIQwGAAAwAAEAAQA5zpbU/Rx8JS/D8Dozlul77dNfs/iznl/i7YP5w5+muZKpQKHam150nuUqLqS0y8qKS/EgPa19xxGPPdUJPKME0mXrRkiOHc0abev9CSs4fHQ5fZu36mEpxw8rXX54/viXdO/lPD0SeNPArxC3MpMoSItaJB2ntyUc7uOS/qcxcXO0K2sHOKzmMY6c+bHrEk2mrqqiI00k8lJQv7+n+npOcc8UtcePeWVO7jUSaTTzhxfImK6Vm202g1z8j0HZrzRpf7cfuPNqdTD+3J6B0dq71tTfdvR+TZtwTw87yo5WQ0IaNDIAGAGLQjIxYCEzIxYCAAAQDABIYAA0MSGAAAwAGCEwAAABnL9Lo/SQffD7mzV7QNp3NCFBW0d7fm9/tOHZWOa8yonfTrKDlKTxFpKTy1nUzZcsRPq24PHt6xk3wrMwpycpfFJvEVq5Y1z3JePAjXXTazo9iU47zxjdp1KvF6YawnwfDJPrbOpVViqt6ONI4f3Lj8h0NkW+YvqISlBbsHUjB7qy2sIyV9f8m6Ytrhha30LpdmEW3hppOEsNaaPUs7LKg4y0ayvUkR+ijlYXckkskeGd3Pq/U53iPjpXaBbU8znPdTSb4pPnjhg0bV25XoUpVoxW7CUYYa6pZk+5ptpa64Xgids+q1JrOFJlnOimtd2WeUlvJlsUx9VyRLiLHpo60HOrSUI725vZ7DfFdppYyuGUvNEmCjJupHKUkm012teRdz2bFdmNKEU23iPw578GuFnCClupp4xx4L8i1pjfCIrOuUOrJqOcand9DriLs4yk0oqdRZk0lozhKrxCbzwjL7Cm/xOdOgqdLt1HvNKTe5GWMuWPP5namT0Z74Pyz29xhJSWYtNPg08pmRwvslurmdtWjczU3GqnBpJaSWvDxR3Zsrb2jbz8tPS01AABZzITMhAYiGIDFgDAAAAAADIt5AZIYsgmAxiMkACZkJgYjENAUvSm33qdObWkKmvk9DkKlJR3ZJ83FrzzjB6Nc0lOE4P60WvsPPqzW4s/VzB+EkY89dWiXqeFb2xzX+m22+ZNhErbatg3Su5Se7DTvlxRkmI23RzAu8uSXLizZUiuryUm2toVqLiqVCdbLWZRx2VzbI+0+mEKcHGXxxxiDXaTx3cX5ExXaJnUp6zGafLn4F7SWUteSOB2d0jnWTi7a5UpaKTpSUPny9TsrT4YvO7LEcrOjfkPXU8ncbS6uVkr7qpoyRVus+hT7RuM6Ij6T0r7uUtyolzi0vN6FP0YoVN9dau1PWPgsaLPzLO8nim3+1FfzBsy6SlTlwUFKS5t8sJeZe08OeLuXoXs+oKNtKSWM1JQ/hb/M6fKKDo3JwtKMcYbUqjXjOTl+JPdVno441WHj57e2SZ/2sVJDK1VGbIXDRdyTRGunWTNgGLENiATEMQAAABDlWbMd5mAwNiqMzhVNORbyAnKZsiyBCqbVVAmgzVTqmzICGhDyANnC7etOrq1EtFJ768nr+Z27ZX7Y2VG4j+rNJ7sl9z8Dlmx+8O/j5fx256lwChJ6LizZHsLWS07uIUW0+6SbTT5NcTK7tIVf0kc558GvJrgefMfty9mk7jhujPPM0z2PQqTjUnThKSXZk0m0ipns9xl2a9aKWqWYy+1pskxoPH/dtLOqcln5IvEadPxzaO1s4wgsLCS7uCI/vMN9JyS8ytlZRloris/FNfkb7XZFunvSi6rXOrJ1E35PT7Cs6RNfX6l092pmUZZ8uBAuIZk/BeZavSLxp4aYKmvVUc97OU9qyi3VJSpuL4aP7UbujlgqtVQjx5vjux5v8Cd0YsYXNWcKsd6nGnmSba7Taxqte87awsKNCO5RpxhHnji33tvV+prxYfeImemLN5MY5msdt8IJJRWiSSXkjMxya510jc8tuERJXDMOuYE9Mk0a3JlVG4N0KyYFsI10J5RsYCYgEwDICACqnXSI1S97ivlUbEgJXvUh+9MjoQEyndMmwr5RUI20qrQFxSqEulMpo3BPsq2QLEGwQmAhtiNVaXIDlulOyXvSuaK5ZrQ70vrx8e9FLbXCklzO6rxzGS74yX2Hl8pOjPeWtOT7S/Vff5GPPSN7ej4mWdan4u6tpv8CF/hE5PTHq/wChLoXa010fAmq6hFJ8X3GbT0d/YV8NmzjhPC8m3+BJ6ndN9W6g1ng+4rbraMYxbzwIng5K8uFHTODmNqX6Scs4S1bMLy/dSeVwWfUh17R1lh/Cu1Lz5IiI53LlMzPEOn9nG1O3UbWFUUYxT8G3+J6VvaZPKeiCUa0YLhxR6XXq6JeB6GC24ed5dIrMT9FavyRpyYIzRoYwMQyAAmITAsdnXGuGWWTnqU8STLyjUygNhjJmRHrN64ePEDLeApnVn/7PlIAKtGSMUZoDIQwaAEMQANMmWdXDRDNtu8NAdJSqmwh0J6IlpgNkWb1JMnoRWANHnV7b4lUg+UpL5M9FOQ29SUbmXdNRmvDk/tRn8iP121+HP7zH9uIuLipTzuapfFB/h3EWPSOceKk0ueUzpLzZ2ZbyWvfxTIdx0bhVTajuzfHuMvtH1v1aOpUlbpNKWdHr4xRH99lU0b3VxxnMn+RY/wCQqm9nrFh68E8fab/8tKlzy/J5yN1jo1ee5VsPDyXmXVraPcxoucpM2bN2Prvywkv7/tlx7um1Hde6sYilltvhpzb5I5zy70pEdq/o1ZP3qM0nhRm8P9RLDb820dtOWTHZeynQi3LHW1MdZjVQivhpp+Gct95zvTa/ubSkru3SnCjPFelLhKlLTeT5NPHo2ehgrNa8vH8rJF78dOkiZlF0Y6S29/T36UsTSW/Sl8cH+K8S8yd2YwACACYGMmAmy5tZdlFIydZV89kC4yRq0cvHLi/E3weUa6oGrAGWAA5ZGaMUZIDJDMUZAJiQ2IBm62jlmlEyw4gWdFYROp8CGSKL0AzqcCMbp1DQ2BhXrRhGU5tRjGLlJvRJJZbK7auz/eqSqQWKsFvQ/bg9XHzOF9rPS2mqE7KhPenJ4rSi9IwWrjnvZ6hs34INfqR/+URNdxqVqXmttw4KPc/lzTXEk2ddZ8jots7A6xurR0m+1Km9FJ98fHwOTvKMoS1TTWU0+y0zDfHNZ5exjyVyxuFpVusLOnmVla5jLONcLjxS9SH72n2Wu1w1/qWmxdlTuZYguyn2pP4V+X3vyKeu5076rWPaWFlRlLdUY705PFOCXF978ObOv2PsRUFvze/V1blyi3xx4+JZbN2XToRxFZk1iU3xfgu5eBKlE1Y8MV5nt5fkeXN/1r1/1XXFPsvwOd2tbRqUatOSyqkJwa8GsHT3UtH3Ip40t9vPBZl8juxvl7Ze0qtpWU6U3CcJYyvB6p96PYOjXtHtq6jC5aoVdFvP9FJ+f1fU8Tvn9LU/fm/5mYKoWQ+p4TTScWmnqmnlNGR8+9GOnF3ZYpwkp0s56qprFfuvjE9Q2D7Q7O4xGq/d6j0xN/Rt+E/zwB2LMGwhNSSaaafBp5TEyAmS9nLtEQm7N4sC0pMdRGuMsM2yegGnL8AGIDl0ZIxMkSMkMSAgPIjEAMkTLDiQifs+PMCzNlJlFt3pNZ2Ud64rRi+UE96cvKK1PLOk/tbuKu9Ts4+7w4dY8SqteHKP2gerdIOk1nYxcrirGL5QXaqS8orU8s6Se0u4uU6dsvd6Tyt7jVkvP6voedTuKlabqVZym28uUpOUm/Nm3fwWiEHtKpmMv3WfVGxan0NF99Km/wCVHyb1m9JrljB9M7B2zTjs62r1HhO3pYX1pS3FoiLJh18pxScpNKMU5OTaSSXFt8kebdLPaVsLWnmrd1I9nftYJJeVWbUZLy3kVnS+02jtinKnRlVpU0pONKMty3qNaqNVrWTfy8Dw6nCUZunNOM4ScJRfGMk8NP1GontO5rO4emLpxaOpn3as6Wf9Wn1jXywdZsr2zbPpKNKdlcUKa0UoSpVUvGWXF/eeKVJbi10IM6kpvCJjFSvUL5M+TJxaX1psLpps2+wra6pym1nqpN0q38EsN+hcVWfPHs09nc7uUbm4i1Qi8wzpvy714Ht9tsqtRx1dxJwSS6uqusj6P4l8ysqRCdX+GT8Cn27cRtbG5ry03KFWo+/SLx83hepcPeekl57r3l+Z5t7eNrOnZU7aLw7mrGLWqbp0+3L03ur+ZH0fP1bOdePPxMGyTWp5XiRWWlBqRPpzykyuJNrPkIHQ7F6TXlo/oKslH/Tl26b/AOL4eh3mxfadCTUbun1ecLrKfaivOPFfaeU5DeJH0dZ7Ut6yUqNanUT1W7OLfyLnZvM+W6daUXvRbjJapxbTXqjrNhe0jaNriPWRrw/VrR3njwktfvI0PodG6TPLdhe1+2qNRu6Mrdv/AMkH1tP103l8j0Ww2hRuKaq0KkKsJLSUJKS+wgSsgawA5saMGYueDpNXOt24GzUqqHvFJhfbI1XN1TpRc6kowiuLk0kVvSXbUbO3nXay1iMY98nwR4nt3pPc3km609F8MI6QXpzYS9K2z7SaFPMbeDqy4bz7MPzZx20+n1/VyuudOL+rS7H28TjusZi5BCTcXc5tynKUpPi5Nyb9WaoRcnj5mrJlGo1qglZQwtFwI9zW5I0+9Nrhg1ZLbQkWz1Po7oTsalXsrKpVlOpuW9OMaa7NOGmvDi/E+bbd6n1H7OZv/DLOUX8VCm/sx+BWVodHStlFJRTilySR89e1vo97rtRV4/o73erJaLFWOFVWPVS/5M+iozn3r5HiPt5vlK+sbdp71OhUruS0WKs91JLv+ifzFe0S8suVvza5LQ9O9mXs595Ubq6X0Ocxhzn5+B5/sCFL36jCu8UZVoKo3riLlzfd3+GT6ut7ZUKcadPG4tElwSLWlENtpbRpwjCC3YxWElhG2S8/maY1cmcWc12Mmv7bPn7247T67aULdPMbWhGLXdUq9uX8vVnv1aSWW3hJZb7kuJ8m7c2k7u7ubp69dXqVI55QziC9IpImEShSRHq0s6rib2zCUiyENo2UIvKeNDNNZy1k3KSI0GxMeREoYsTQ2IAi2T9k7bubSaq21adKSab3X2ZeEo8JepXSlj7jCc9Md/EhL1qj7bZKMVOzTmopScamIuWNWljRZA8eAgfT8iNVYAaZZYaovSXkSIPReQgOV3an1wftbm/dqKzo62v8LPJQAouYABATBDABiYAWGy24o+oPZg/+k2P+yvvYgIlMOvPm32sXE57drqUsqnGjTgtOzDq4ywvWUn6gAr2S4+6/SI+qOhNxOrsywqVJOU5WlCUpPi3uLVgBa6KraS1NiADmvCg6cVZQ2bfzg3GUbO5cWuKfVSPlenwQAWqiTmzTJgBMqsWNcUAAbRDABMX5gAGE+KNM+IARKWIABA//2Q==" />
        <Card.Body>
          <Card.Title>JEFF BEZOS</Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102" />
        <Card.Body>
          <Card.Title>{mostrar[3]}</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.semana.com/resizer/GF7G0ALFEVAJBn56CIQBUmwrqSw=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/IQ4MPMDHSFGO7AEG7RSBBOH6OE.jpg" />
        <Card.Body>
          <Card.Title>{mostrar[4]}</Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2021/01/08/bill-gates.jpeg" />
        <Card.Body>
          <Card.Title>{mostrar[5]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/850151743455244290/T-Xm2Giz_400x400.jpg" />
        <Card.Body>
          <Card.Title>Ben Fry</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 90 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://americanartsincubator.org/wp-content/uploads/2018/11/Lauren-McCarthy-Headshot.jpg" />
        <Card.Body>
          <Card.Title>LAUREN McCarthy</Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2021/01/08/bill-gates.jpeg" />
        <Card.Body>
          <Card.Title>{mostrar[8]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Casey_Reas.jpg" />
        <Card.Body>
          <Card.Title>CASEY REAS</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 years ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/b/bf/ToddHoward2010sm_%28cropped%29.jpg" />
        <Card.Body>
          <Card.Title>{mostrar[5]}</Card.Title>
          <Card.Text>
           TODD HOWARD
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2021/01/08/bill-gates.jpeg" />
        <Card.Body>
          <Card.Title>{mostrar[5]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.gamelab.es/wp-content/uploads/2020/06/hugo_martin.png" />
        <Card.Body>
          <Card.Title>{mostrar[5]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE IDEAS POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2021/01/08/bill-gates.jpeg" />
        <Card.Body>
          <Card.Title>{mostrar[5]}</Card.Title>
          <Card.Text>
         
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://eldiario.com/wp-content/uploads/2020/09/reed-1.jpg" />
        <Card.Body>
          <Card.Title>{mostrar[5]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://eldiario.com/wp-content/uploads/2020/09/reed-1.jpg" />
        <Card.Body>
          <Card.Title>{mostrar[6]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://eldiario.com/wp-content/uploads/2020/09/reed-1.jpg" />
        <Card.Body>
          <Card.Title>{mostrar[7]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://eldiario.com/wp-content/uploads/2020/09/reed-1.jpg" />
        <Card.Body>
          <Card.Title>{mostrar[8]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://eldiario.com/wp-content/uploads/2020/09/reed-1.jpg" />
        <Card.Body>
          <Card.Title>{mostrar[9]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://eldiario.com/wp-content/uploads/2020/09/reed-1.jpg" />
        <Card.Body>
          <Card.Title>{mostrar[10]}</Card.Title>
          <Card.Text>
           OFRECE SUS DATOS DE PROYECTOS DE POR 30 mil
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
    </CardColumns>
    </Form>
    
    )}

  export default Bus;

   

  
   