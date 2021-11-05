export default {
  authAct: (state, action) => {
    const payload = action.payload;
    state.username = payload.username;
    state.password = payload.password;
  },
};
