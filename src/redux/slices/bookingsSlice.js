import {createSlice} from '@reduxjs/toolkit';
import {SEED_BOOKINGS} from '../seed/data';

const initialState = {
  list: SEED_BOOKINGS,     
  filter: 'All',          
  search: '',
};

const slice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setFilter: (state, {payload}) => { state.filter = payload; },
    setSearch: (state, {payload}) => { state.search = payload; },
    deleteBooking: (state, {payload}) => {
      state.list = state.list.filter(b => b.id !== payload);
    },
  },
});

export const {setFilter, setSearch, deleteBooking} = slice.actions;
export default slice.reducer;
