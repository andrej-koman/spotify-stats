<script>
  import NavItem from "./NavItem.svelte";
</script>

<div class="navigation">
  <NavItem to="/" iconClass="fa-brands fa-spotify" />
  <NavItem to="/" iconClass="fa-solid fa-user" isMiddle>Profile</NavItem>
  <NavItem to="/artists" iconClass="fa-solid fa-microphone" isMiddle>Top Artists</NavItem>
  <NavItem to="/tracks" iconClass="fa-solid fa-music" isMiddle>Top Tracks</NavItem>
  <NavItem to="/recent" iconClass="fa-solid fa-clock" isMiddle>Recent</NavItem>
  <a href="https://github.com/andrej-koman/spotify-stats" target="_blank" rel="noreferrer">
    <i class="fa-brands fa-github icon" />
  </a>
</div>

<style>
  .navigation {
    box-shadow: rgb(0 0 0 / 30%) 0px 0px 10px;
    display: flex;
    position: fixed;
    width: 100%;
    background-color: black;
    left: 0px;
    bottom: 0px;
    z-index: 99;
    justify-content: space-around;
  }
</style>
