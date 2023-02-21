import { useState } from 'react'
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="intro-container">
      <h1>Spotify Stats</h1>
      <a class="login-button" href="http://localhost:3000/login">LOG IN TO SPOTIFY</a>
    </div>
  )
}

export default App
