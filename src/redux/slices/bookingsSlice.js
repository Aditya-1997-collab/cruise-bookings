import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '1', title: 'Merlion Cruise', date: '23 Apr 2025, 5 PM', status: 'Upcoming' },
    { id: '2', title: 'River Cruise', date: '25 Apr 2025, 7 PM', status: 'Completed' },
    { id: '3', title: 'Night Cruise', date: '28 Apr 2025, 9 PM', status: 'Canceled' },
  ],
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
});

export default bookingsSlice.reducer;
