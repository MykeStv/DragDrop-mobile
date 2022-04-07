
export const RECEIVE_PHONES = 'RECEIVE_PHONES'

export const receivePhones = (phones) => async(dispatch) => {
    return (
        dispatch({
            type: RECEIVE_PHONES,
            phones
        })
    )
}
