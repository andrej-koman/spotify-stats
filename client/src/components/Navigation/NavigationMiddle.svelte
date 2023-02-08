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

<div class="navigation-middle">
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
  </div>

  <style>
  .navigation-middle {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  </style>