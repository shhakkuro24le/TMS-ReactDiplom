import { GET_USER } from './../types';
export const getUserAC = (userInfo:any) => ({ type: GET_USER, payload: userInfo });