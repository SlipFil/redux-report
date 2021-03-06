import { makeAutoObservable } from "mobx"


class Cars {
      cars = [
            {name:"BMW",
            id:1},
            {name:"Audi",
            id:2},
      ]
      constructor(){
            makeAutoObservable(this)
      }
      addCar(car){
            this.cars.push(car)
      }
      deleteCar(id){
            this.cars = this.cars.filter(car => car.id !== id)
      }
}

export default new Cars()