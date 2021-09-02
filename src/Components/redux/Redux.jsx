import React from "react";
import { Table } from "react-bootstrap";
import {  useSelector } from "react-redux";
import CarInput from "./CarInput"





const Redux = () => {
  const cars = useSelector(state => state.cars)
    
  return (
    <div>
      <CarInput />
      <div className="form-wrapper">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Car Name</th>
              <th>Car Price</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => {
              return (
                <tr key={car.id} >
                  <td>{car.name}</td>
                  <td>{car.price}</td>
                </tr >
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Redux;
