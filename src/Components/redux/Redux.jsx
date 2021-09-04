import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_CAR } from "../../redux/consts";
import CarInput from "./CarInput";

const Redux = () => {
  const cars = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch();
  const handleClick = (id) =>
    dispatch({
      type: DELETE_CAR,
      payload: id,
    });
  return (
    <div>
      <CarInput />
      <div className="form-wrapper">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Car Name</th>
              <th>Car Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => {
              return (
                <tr key={car.id}>
                  <td>{car.name}</td>
                  <td>{car.price}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleClick(car.id);
                      }}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Redux;
