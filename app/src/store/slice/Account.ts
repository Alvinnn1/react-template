import { createAsyncThunk, createSlice, ThunkAction } from '@reduxjs/toolkit';
import mainApi from '@/api';

interface AccountState {
  data: number
  userInfo: string
}

export const getUserInfo = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(loadUserData('dsfsd'))
  })
};

const accountSlice = createSlice({
  name: 'account',
  initialState: <AccountState>{ data: 123 },
  reducers: {
    logout: state => {
      localStorage.setItem('token', '');
      state.userInfo = '';
    },
    loadUserData: (state, action) => {
      Object.assign(state, { userInfo: action.payload });
    }
  },
});
export default accountSlice;
export const { logout, loadUserData } = accountSlice.actions;
