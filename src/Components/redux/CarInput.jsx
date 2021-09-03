import React from 'react'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_CAR } from "../../redux/consts";
import { Button} from "react-bootstrap";
import {  useSelector } from "react-redux";


function CarInput() {
  
      const dispatch = useDispatch()
      const [newCarName, setNewCarName] = useState()
      const [newCarPrice, setNewCarPrice] = useState()
      const carNameChange = e => setNewCarName(e.target.value)
      const carPriceChange = e => setNewCarPrice(e.target.value)
      const handleClick = () => dispatch({
        type: ADD_CAR,
        payload: {
          name: newCarName,
          price: newCarPrice,
          id: Date.now()
        }
      })
    
      return (
        <div>
          <input style={{ margin: "5px" }} value={newCarName} onChange={carNameChange} type='text' placeholder='Enter Car Name' />
          <input style={{ margin: "5px" }} placeholder='Enter Car Price' value={newCarPrice} onChange={carPriceChange} type='text' />
          <Button onClick={handleClick}> ADD CAR</Button>
    
        </div>
    
      )
}

export default CarInput
