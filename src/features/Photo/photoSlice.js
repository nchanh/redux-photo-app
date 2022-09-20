const { createSlice } = require('@reduxjs/toolkit');

const photoSlice = createSlice({
  name: 'photos',
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
  },
});

// const { reducers, actions } = photo;
// export const { addPhoto } = actions;
// export default reducers;

export const { addPhoto } = photoSlice.actions;
export default photoSlice.reducer;
