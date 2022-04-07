import { RECEIVE_PHONES, MOVE_INCART } from '../actions/phones'

export default function phones(state={}, action) {
    switch(action.type) {
        case RECEIVE_PHONES:
            return {
                ...state,
                ...action.phones
            }

        case MOVE_INCART:
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    inCart: 'true'
                }
            }
        
        default:
            return state;
    }
}