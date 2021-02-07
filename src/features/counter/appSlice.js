import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    ChannelId: null,
    ChannelName: null,
  },
  reducers: {
    setChannelInfo: (state, action) => {
        state.channelId = action.payload.channelId;
        state.channelName = action.payload.channelName;  
    },
  },
});

export const {setChannelInfo} = appSlice.actions;

export const selectChannelId = state => state.app.ChannelId;
export const selectChannelName = state => state.app.ChannelName;

export default appSlice.reducer;
