import { GET_ERRORS, CLEAR_ERRORS } from './types';

/* export interface ErrorState {
    msg: string;
    status: number;
    id: null;
}
 */
// RETURN ERRORS
export const returnErrors = (msg : string, status: number)  => {
    return {
        type: GET_ERRORS,
        payload: { msg, status}
    }
}

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}