import { observer } from 'mobx-react'
import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import Cars from '../../mobx/carsStore.js'

const CarsList = observer(() => {
      const [car, setcar] = useState()
      return (
            <div>
                  <form action="">
                        <input type="text" />
                        <Button onClick={(car) => { Cars.addCar(car) }}>Добавить</Button>
                  </form>
                  <br />
                  <br />
                  <ListGroup as="ul">
                        {Cars.cars.map((car) => {
                              <ListGroup.Item key={car.id} as="li" >
                                    {car.name}
                              </ListGroup.Item>
                        })}

                  </ListGroup>

            </div>
      )
})

export default CarsList

