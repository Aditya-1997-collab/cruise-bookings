import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '1', name: 'Music Festival', date: '12 May 2025, 6 PM', location: 'Marina Bay' },
    { id: '2', name: 'Food Carnival', date: '15 May 2025, 1 PM', location: 'City Center' },
  ],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export default eventsSlice.reducer;
