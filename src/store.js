import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './features/user/userSlice'; // <-- Update import statement

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
