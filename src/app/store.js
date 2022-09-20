const { configureStore } = require('@reduxjs/toolkit');
const { default: photoSlice } = require('features/Photo/photoSlice');

const rootReducer = {
  photos: photoSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
