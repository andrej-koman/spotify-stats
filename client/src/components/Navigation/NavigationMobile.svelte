<script>
  import NavItem from "./NavItem.svelte";
  /* Set current selected based on path */
  $: currentlySelected = window.location.href.split("/")[3];

  /* Make sure that profile is selected on login */
  $: if (window.location.href.split("/")[3].startsWith("?")) {
    console.log("here");
    currentlySelected = "";
  }

  /* Use dispatcher to toggle between selected items */
  const handleToggle = (e) => {
    if (e.detail === "Profile") {
      currentlySelected = "";
    }
    if (e.detail === "Top Artists") {
      currentlySelected = "artists";
    }
    if (e.detail === "Top Tracks") {
      currentlySelected = "tracks";
    }
    if (e.detail === "Recent") {
      currentlySelected = "recent";
    }
  };
</script>

<div class="navigation">
  <NavItem to="/" iconClass="fa-brands fa-spotify" />
  <NavItem
    to="/"
    iconClass="fa-solid fa-user"
    isMiddle
    isActive={currentlySelected === ""}
    on:toggle-active={handleToggle}>Profile</NavItem
  >
  <NavItem
    to="/artists"
    iconClass="fa-solid fa-microphone"
    isMiddle
    isActive={currentlySelected === "artists"}
    on:toggle-active={handleToggle}>Top Artists</NavItem
  >
  <NavItem
    to="/tracks"
    iconClass="fa-solid fa-music"
    isMiddle
    isActive={currentlySelected === "tracks"}
    on:toggle-active={handleToggle}>Top Tracks</NavItem
  >
  <NavItem
    to="/recent"
    iconClass="fa-solid fa-clock"
    isMiddle
    isActive={currentlySelected === "recent"}
    on:toggle-active={handleToggle}>Recent</NavItem
  >
  <a
    href="https://github.com/andrej-koman/spotify-stats"
    target="_blank"
    rel="noreferrer"
  >
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
    align-items: center;
  }
</style>
