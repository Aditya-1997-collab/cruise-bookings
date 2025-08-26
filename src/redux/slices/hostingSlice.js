import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '1', name: 'Villa Stay', date: '10 June 2025', type: 'House' },
    { id: '2', name: 'Apartment Rent', date: '15 June 2025', type: 'Apartment' },
  ],
};

const hostingSlice = createSlice({
  name: 'hosting',
  initialState,
  reducers: {},
});

export default hostingSlice.reducer;
