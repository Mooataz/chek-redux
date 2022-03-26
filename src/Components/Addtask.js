import React from 'react'
import { useState } from 'react'
import {Row,Col,FloatingLabel,Form,Button} from 'react-bootstrap'
import {addItem} from '../reactredux/Actions/Actions'
function Addtask() {
  const [valeur,setValeur]=useState();
  const Remplire= (el,nl)=>{setValeur.nl(el)}
  
  return (
    <div>
      <Row className="g-2">
    <Col md>
      <FloatingLabel controlId="floatingInputGrid" label="ID">
        <Form.Control type="text" placeholder="name@example.com"  name='id' 
        onChange={setValeur.id(Math.random())}/>
      </FloatingLabel>
    </Col>
    <Col md>
      <FloatingLabel controlId="floatingInputGrid" label="Description">
        <Form.Control type="text" placeholder="name@example.com" name='description'
        onChange={Remplire(e.target.value,e.target.name)}/>
      </FloatingLabel>
    </Col>
    <Col md>
      <FloatingLabel controlId="floatingSelectGrid" label="isDone or Not" name='isDone'
      onChange={Remplire(e.target.value,e.target.name)}>
        <Form.Select aria-label="Floating label select example" name='isDone'>
          
          <option value="1"  onChange={Remplire(e.target.value,e.target.name)}>isDone</option>
          <option value="2"  onChange={Remplire(e.target.value,e.target.name)}>is Not DONE</option>
          
        </Form.Select>
      </FloatingLabel>
    </Col>
    <Button type="submit" onChange={addItem({valeur})} >Submit form</Button>
  </Row>
    </div>
  )
}

export default Addtask