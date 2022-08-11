import { createSelector } from "@reduxjs/toolkit"
export const postsSelector = (state:any) => state.posts

export const userSelector = (state:any) => state.user
export const authSelector = (state:any) => state.auth
export const userInfoSelector= createSelector(userSelector, (state)=>state.user)