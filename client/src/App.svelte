<script>
  import { onMount } from "svelte";
  import Profile from "./components/Profile.svelte";
  import Tracks from "./components/Tracks.svelte";
  import Navigation from "./components/Navigation/Navigation.svelte";
  import Recent from "./components/Recent.svelte";
  import NavigationMobile from "./components/Navigation/NavigationMobile.svelte";
  import Artists from "./components/Artists.svelte";
  import { accessToken } from "./spotify";
  import { Router, Route } from "svelte-navigator";

  const LOGIN_URI = process.env.NODE_ENV === 'production' ? 'https://spotify-stats-app.herokuapp.com/login' : 'http://localhost:3000/login';

  let width;
  $: isMobile = width < 768;
  
</script>

<svelte:window bind:innerWidth={width}/>
<Router>
  {#if accessToken}
    {#if !isMobile}
      <Navigation />
    {:else}
      <NavigationMobile />
    {/if}
  <Route path="/" component={Profile} primary={false} />
  <Route path="/tracks" component={Tracks} primary={false} />
  <Route path="/artists" component={Artists} primary={false} />
  <Route path="/recent" component={Recent} primary={false} />
  {:else}
  <div class="intro-container">
    <h1>Spotify Stats</h1>
    <a class="login-button" href={LOGIN_URI}>LOG IN TO SPOTIFY</a>
  </div>
  {/if}
</Router>

<style>
  .intro-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  .login-button {
    appearance: button;
    display: inline-block;
    background-color: rgb(29, 185, 84);
    color: rgb(255, 255, 255);
    border-radius: 30px;
    padding: 17px 35px;
    margin: 20px 0px 70px;
    min-width: 160px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
  }

  .login-button:hover {
    background-color: rgb(34, 219, 99)
  }

  .login-button:active {
    color: #cacaca;
    background-color: gray;
  }
</style>
