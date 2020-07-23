import * as Types from '../../configs/actionType';

export const setCurrentUser = user => {
    return {
        type: Types.SET_CURRENT_USER,
        payload: user
    }
}