<script>
  import NavItem from "./NavItem.svelte";
</script>

<div class="navigation">
  <NavItem to="/" iconClass="fa-brands fa-spotify" />
  <div class="navigation-middle">
    <NavItem to="/" iconClass="fa-solid fa-user" isMiddle>Profile</NavItem>
    <NavItem to="/artists" iconClass="fa-solid fa-microphone" isMiddle>Top Artists</NavItem>
    <NavItem to="/tracks" iconClass="fa-solid fa-music" isMiddle>Top Tracks</NavItem>
    <NavItem to="/recent" iconClass="fa-solid fa-clock" isMiddle>Recent</NavItem>
  </div>
  <a href="https://github.com/andrej-koman/spotify-stats" target="_blank" rel="noreferrer" >
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
</style>
