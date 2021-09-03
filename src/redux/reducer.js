import { ADD_CAR, DELETE_CAR } from "./consts"



const initialState = {
    cars: [
        {
        name: "Lada",
        price: "3",
        id: Date.now()
    },
]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }
        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.payload)
            }
        default:
            return state
    }
}
export default reducer