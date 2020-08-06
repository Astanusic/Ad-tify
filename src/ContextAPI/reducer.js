export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQBQxWIoYiYopuOXMi8CAAYl0KRwuayzgN2Oo4sJlCnKAu8c3p5gYw-KcXhxKlnkMrvFW5AxG3J8sZdAxaH_v5JGMdNxXuQSmIn-0BQCsf1z9vshxWM26Zd6A1AJ9VOicJmLKKCluJy4UHHqmNgcDNTDrZJcJygwKg",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
