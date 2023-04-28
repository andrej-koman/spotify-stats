import { accessToken } from "./spotify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Tracks from "./components/Tracks";
import Artists from "./components/Artists";
import Profile from "./components/Profile.jsx";

import "./app.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {accessToken ? (
          <>
            <Navigation />
            <Routes>
              <Route path="/" exact Component={Profile} />
              <Route path="/artists" exact Component={Artists} />
              <Route path="/tracks" exact Component={Tracks} />
              <Route path="/recent" exact Component={Profile} />
            </Routes>
          </>
        ) : (
          <div className="intro-container">
            <h1>Spotify Stats</h1>
            <a href="http://localhost:8000/login" className="login-button">
              LOG IN TO SPOTIFY
            </a>
          </div>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
