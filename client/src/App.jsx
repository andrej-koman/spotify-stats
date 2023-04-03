import { useState, useEffect } from "react";
import Profile from "./components/Profile.jsx";
import { accessToken } from "./spotify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width < 768;

  return (
    <>
      <BrowserRouter>
        {accessToken ? (
          <Routes>
            <Route path="/" exact Component={Profile} />
          </Routes>
        )
          : (
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
}

export default App
