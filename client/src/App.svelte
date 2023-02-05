<script>
  import { onMount } from "svelte";
  import Profile from "./components/Profile.svelte";
  import Songs from "./components/Songs.svelte";
  import Navigation from "./components/Navigation.svelte";
  import { userToken } from "./stores.js";
  import { accessToken, getCurrentUserProfile } from "./spotify";
  import { Router, Link, Route } from "svelte-navigator";


  onMount(() => {
    userToken.set(accessToken);
  });
</script>

<Router>
  {#if accessToken}
  <Navigation />
  <main>
    <Route path="/" component={Profile} />
    <Route path="/songs" component={Songs} />
  </main>
  {:else}
  <div class="intro-container">
    <h1>Spotify stats</h1>
    <a class="login-button" href="http://localhost:3000/login">LOG IN</a>
  </div>
  {/if}
</Router>

<style>
  main {
    margin-left: 100px;
  }
  .intro-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  .login-button {
    appearance: button;
    font-family: sans-serif;
    text-decoration: none;
    background-color: #1ed760;
    color: #000000;
    border-radius: 500px;
    padding: 14px 32px;
    border: black;
    cursor: pointer;
    font-weight: bold;
  }

  .login-button:hover {
    color: #252525;
    box-shadow: 2px 2px #252525;
    background-color: #20b755;
  }

  .login-button:active {
    color: black;
    background-color: gray;
  }
</style>
