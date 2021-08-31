

const initialState = {
    cars: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_CAR':
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }
        case 'DELETE_CAR':
            return{
                ...state,
                cars: state.cars.filter(car=> car.id !== action.payload)
            }  
        default :
            return state
    }
}
export default reducer