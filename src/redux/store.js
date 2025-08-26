import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices/bookingsSlice';
import eventsReducer from './slices/eventsSlice';
import hostingReducer from './slices/hostingSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    events: eventsReducer,
    hosting: hostingReducer,
  },
});
