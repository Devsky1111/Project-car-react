
import { exitsEleinArr } from './../Components/functioninProject';
let initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CART':
            console.log(11111111111111111)
            if (exitsEleinArr(state, action.payload)) {
                let eleFind1 = exitsEleinArr(state, action.payload)
                eleFind1.qty = eleFind1.qty + 1
                return [...state]
            }
            else {
                action.payload.qty = 1
                return [...state, action.payload]
            }


        default:
            return state
    }

}
export default reducer