import { SET_AUTH } from "../types";

export const setAuthAC = (auth:boolean) => ({type:SET_AUTH, payload:auth})

 type SetAuthAction = ReturnType<typeof setAuthAC>
 export type AuthActions = SetAuthAction