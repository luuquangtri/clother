import * as Types from '../../configs/actionType';

export const actGetAllDirectory = (list) => {
    return {
        type: Types.GET_ALL_DIRECTORY,
        payload: list
    }
}
