import { observer } from "mobx-react";
import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Cars from "../../mobx/carsStore.js";

const CarsList = observer(() => {
  const [carName, setCarName] = useState();
  const carNameChange = (e) => setCarName(e.target.value);
  const handleClick = () => {
    let car = { name: carName, id: Date.now() };
    Cars.addCar(car);
  };
  

  return (
    <div>
      <br />
      <form action="">
        <input value={carName} type="text" onChange={carNameChange} />{" "}
        <Button onClick={handleClick}>Добавить</Button>
      </form>
      <br />

      <ListGroup as="ul">
        {Cars.cars.map((car) => {
          return (
            <ListGroup.Item as="li" key={car.id} as="li">
              {car.name} <Button onClick={()=>Cars.deleteCar(car.id)} variant="danger">X</Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
});

export default CarsList;
