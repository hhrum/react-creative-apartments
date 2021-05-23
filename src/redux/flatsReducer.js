import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  flats: []
};

const flatsSlice = createSlice({
  name: "flats",
  initialState,
  reducers: {
    setFlats(state, action) {
      state.flats = action.payload;
    },

    likeFlat(state, action) {
      const flat = state.flats.find(el => el.id === action.payload);
      flat.like = !flat.like;
    }
    // загрузка данных
    // изменить значение лайка
  }
});

export const {setFlats, likeFlat} = flatsSlice.actions;
export default flatsSlice.reducer;