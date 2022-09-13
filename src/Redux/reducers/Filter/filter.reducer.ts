import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
type InitialStateType = {
    categoryId: number;
};
const initialState: InitialStateType = {
    categoryId: 0,
};
const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      setCategoryId(state, action: PayloadAction<number>) {
        state.categoryId = action.payload;
      },
      setFilters(state, action: PayloadAction<any>) {
        if (Object.keys(action.payload).length) {
        
          state.categoryId = Number(action.payload.categoryId);
      
        } else {
        
          state.categoryId = 0;
        
        }
      },
    },
  });
  
  export const { setCategoryId,setFilters} =
    filterSlice.actions;
  
  export default filterSlice.reducer;
  export const selectFilter = (state: RootState) => state.filter;