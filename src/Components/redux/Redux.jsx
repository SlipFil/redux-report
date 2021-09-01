import React from "react";
import {
  
  Button,
 
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const CarnameInput = ()=> {
  const dispatch = useDispatch()
  const [newCarName, setNewCarName] =  useState()
  const [newCarPrice, setNewCarPrice] =  useState()
  const carNameChange = e => setNewCarName(e.target.value)
  const carPriceChange = e => setNewCarPrice(e.target.value)
  const handleClick = ()=>dispatch({
    type: 'ADD_CAR',
    payload: {
      name: newCarName,
      price: newCarPrice,
      id: Date.now()
    }
  })

  return(
    <div>
      <input style={{margin:"5px"}} value={newCarName} onChange={carNameChange} type='text'  placeholder='Enter Car Name'/>
      <input  style={{margin:"5px"}} placeholder='Enter Car Price' value={newCarPrice} onChange={carPriceChange} type='text'  />
      <Button onClick={handleClick}> ADD CAR</Button>
    
    </div>
    
  )
}


const Redux = () => {
  const cars = useSelector(state => state.cars)
  
  return (
    <div>
      <CarnameInput />
      <div className="form-wrapper">
      
        
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              
              <th>Car Name</th>
              <th>Car Price</th>
              
            </tr>
          </thead>
          <tbody>
           { cars.map((car)=> { return(
              <tr key={car.id} >
              
              <td>{car.name}</td>
              <td>{car.price}</td>
              
            </tr >
            )})}
            
            
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Redux;
