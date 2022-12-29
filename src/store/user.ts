import { createSlice } from '@reduxjs/toolkit';

// const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') : null;
const user = localStorage.getItem('user');
const initialUser = user ? JSON.parse(user) : null;

//note to self, I notice this seems to have multiple reducers per feature;

const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutSuccess: (state, action?: any) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

console.log(slice);

const { loginSuccess, logoutSuccess } = slice.actions;

export const login =
  ({ username, password }: any) =>
  async (dispatch: any) => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(loginSuccess({ username }));
    } catch (e: any) {
      return console.error(e.message);
    }
  };

export const logout = () => async (dispatch: any) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess(undefined));
  } catch (e: any) {
    return console.error(e.message);
  }
};
export default slice.reducer;
