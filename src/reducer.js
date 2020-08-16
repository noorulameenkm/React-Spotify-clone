export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  // token:
  //   "BQD-ncOmL6A4-zWPsdZxG2CzhhLQEYgnKcSa7jUWb8KUiwfMp0lRyEL9uwH535vjpNpIHejPWliU1k_lrg8WalltiggdTbVzdiIJq0nfeQLmGs3ufY2Ed1tTZ48g_2Kmp_u2pVOlysTX7QG9BEyZ4-q6uvffcR2gnUEuQufdNBzlkINi",
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_TOKEN":
      return { ...state, token: action.payload };

    case "SET_PLAYLIST":
      return { ...state, playLists: action.payload };

    case "SET_DISCOVER_WEEKLY":
      return { ...state, discoverWeekly: action.payload };

    case "SET_CURRENT_TRACK":
      return { ...state, currentTrack: action.payload };

    case "SET_PLAYING":
      return { ...state, playing: action.payload };

    default:
      return state;
  }
};

export default reducer;
