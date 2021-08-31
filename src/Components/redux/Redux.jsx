import React from "react";
import {
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const CarnameInput = ()=> {
  const dispatch = useDispatch()
  const [newCarName, setNewCarName] =  useState()
  const carNameChange = e => setNewCarName(e.target.value)
  const handleClick = ()=>dispatch({
    type: 'ADD_CAR',
    payload: {
      name: newCarName,
      id: Date.now()
    }
  })

  return(
    <div>
      <input value={newCarName} onChange={carNameChange} type='text'  />
      <button onClick={handleClick}> ADD CAR</button>
    
    </div>
    
  )
}


const Redux = () => {
  const cars = useSelector(state => state.cars)
  
  return (
    <div>
      <CarnameInput />
      <div className="form-wrapper">
      
        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label  htmlFor="inlineFormInput" visuallyHidden>
                Car Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Car Name"
              />
            </Col>
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Car Price
              </Form.Label>
              <InputGroup className="mb-2">
                
                <FormControl id="inlineFormInputGroup" placeholder="Car Price" />
              </InputGroup>
            </Col>
            <Col xs="auto"></Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Send
              </Button>
            </Col>
          </Row>
        </Form>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Car Name</th>
              <th>Car Price</th>
              
            </tr>
          </thead>
          <tbody>
           { cars.map((car)=> { return(
              <tr key={car.id} >
              <td>1</td>
              <td>{car.name}</td>
              <td>{car.id}</td>
              
            </tr >
            )})}
            
            
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Redux;
