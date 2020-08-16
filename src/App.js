import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebAPI from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useDataLayerValue } from "./DataLayer";
import "./App.css";

const spotify = new SpotifyWebAPI();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  // Run code based on a condition defined
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        payload: _token,
      });

      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_SPOTIFY",
        payload: spotify,
      });

      spotify.getMe().then((me) => {
        dispatch({
          type: "SET_USER",
          payload: me,
        });
        console.log("The user is ", me);
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          payload: playlists.items,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcIc1NsCETnzu").then((discoverWeekly) => {
        dispatch({
          type: "SET_CURRENT_PLAYLIST",
          payload: discoverWeekly,
        });

        const currentTrack = discoverWeekly?.tracks?.items[0]?.track;
        dispatch({
          type: "SET_CURRENT_TRACK",
          payload: currentTrack,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
