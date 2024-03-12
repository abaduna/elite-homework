import { useEffect,useReducer, useState } from "react";
import { useFetch } from "./hoock/useFetch";
import {Container,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SerchProcessor,SerchGender } from "./hoock/strategy";
import { Character } from "./type/Fetch";
import {fetchReducer,initialState} from "./reducers/Fetch"
import { SET_ADD } from "./action/Fetch";
function App() {
  const {state,fetchData} = useFetch()
  const {data,loading,error} = state
  let {info,results} = data
  const [stateNew, dispatchnew] = useReducer(fetchReducer,initialState)
  const [gender,serGender]= useState("")
  const [update, setUpdate] = useState(0);
  const [chrarctersrRender,setChrarctersrRender] = useState<Character[]>([])
  
  
  useEffect(()=>{
    fetchData()
    setChrarctersrRender(results as Character[])
  },[])
  const serch = new SerchProcessor()
  
  
  
  //dispatch({type:SET_ADD,payload:data})
  const HandelerSerchClick=()=>{
    console.log(`HandelerSerchClick`);
    console.log(`gender ${gender}`);
    
    serch.setSerchStrategy(new SerchGender(gender) )
    const resultsSerch = serch.processSerch(results as Character[])
    dispatchnew({type:SET_ADD,payload: {info:undefined,results:resultsSerch}})
    console.log(resultsSerch);
    setChrarctersrRender(resultsSerch as Character[])
  }
  
  return (
  <>
  <Container>
  <Form.Select aria-label="Default select example" onChange={(e)=>serGender(e.target.value) } value={gender as string}>
      <option>Elije una opcion</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="unknown">unknown</option>
    </Form.Select>
    <Button onClick={()=>HandelerSerchClick()}>Serch</Button>
 
      <Row>
        {chrarctersrRender && chrarctersrRender?.length >0 && chrarctersrRender?.map((character,index)=>(
         <Col key={index} sm={12} md={6}> <Card>
         <Card.Img variant="top" src={character.image} />
         <Card.Body>
           <Card.Title>{character.name}</Card.Title>
           <Card.Text>
          <p>gender:{character.gender}</p> 
          <p>species:{character.species}</p>
          <p>status:{character.status}</p>
           </Card.Text>
          
         </Card.Body>
       </Card></Col> 
   
  ))}
        
      </Row>
    </Container>
  
  </>
  );
}

export default App;
