
export const RECEIVE_PHONES = 'RECEIVE_PHONES'
export const MOVE_INCART = 'MOVE_INCART'

export const receivePhones = (phones) => async(dispatch) => {
    return (
        dispatch({
            type: RECEIVE_PHONES,
            phones
        })
    )
}

export function moveIncart(phone_id){
    return{
        type: MOVE_INCART,
        id: phone_id
    }
}