import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import { useDataLayerValue } from "./ContextAPI/data-layer";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("person", user);
      });
    }
  }, []);

  return (
    <div>
      {/* {token ? <Player spotify={spotify} /> : <Login />} */}
      <Player spotify={spotify} />
    </div>
  );
}

export default App;
