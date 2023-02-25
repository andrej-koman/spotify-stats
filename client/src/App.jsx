import { useState } from 'react'
import { getProfileData, logout } from './spotify';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const profile = getProfileData();
  useEffect(() => {
    profile.then((data) => {
      setUser(data)
    })
  }, [])

  if (user) {
    return (
      <div className="main-container">
        <h1>Spotify Stats</h1>
        <h2>Welcome, {user.user.display_name}</h2>
        <img src={user.user.images[0].url} alt="user profile" />
        <button onClick={logout}>LOG OUT</button>
      </div>
    )
  }
  else {
    return (
      <div className="intro-container">
        <h1>Spotify Stats</h1>
        <a className="login-button" href="http://localhost:3000/login">LOG IN TO SPOTIFY</a>
      </div>
    )
  }
}

export default App
