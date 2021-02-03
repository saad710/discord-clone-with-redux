import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    ChannelId: null,
    ChannelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {setChannelId} = appSlice.actions;

export const selectChannelId = state => state.app.ChannelId;
export const selectChannelName = state => state.app.ChannelName;

export default appSlice.reducer;
