<script>
  import { Link } from "svelte-navigator";
  import { logout } from "../spotify.js";
</script>

<div class="navigation">
  <Link to="/" style="text-decoration: none;">
    <i class="fa-brands fa-spotify icon" />
  </Link>
  <div class="navigation-middle">
    <Link to="/" style="text-decoration: none;">
        <div class="nav-item">
            <i class="fa-solid fa-user icon" />
            <span class="nav-item-text">Profile</span>
        </div>
    </Link>
    <Link to="/songs" style="text-decoration: none;">
        <div class="nav-item">
            <i class="fa-solid fa-microphone icon"></i>
            <span class="nav-item-text">Top artists</span>
        </div>
    </Link>
  </div>
  <a href="https://github.com/andrej-koman">
    <i class="fa-brands fa-github icon" />
  </a>
</div>

<style>
  .navigation {
    box-shadow: rgb(0 0 0 / 30%) 0px 0px 10px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100px;
    background-color: rgb(4, 3, 6);
    text-align: center;
    z-index: 99;
  }

  .navigation-middle {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding-bottom: 1rem;
    color: rgb(175, 175, 175);
  }

  .nav-item:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }

  .nav-item-text {
    font-size: 0.8rem;
  }

  .icon {
    font-weight: 900;
    margin-top: 1rem;
  }
  .fa-spotify {
    color: #1ed760;
    font-size: 3rem;
  }

  .fa-github {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .fa-solid {
    font-size: 1.5rem;
  }

  .nav-item:active, .fa-github:active {
    color:#1ed760;
  }
</style>
