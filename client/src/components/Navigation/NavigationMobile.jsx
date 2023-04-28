import "./NavigationMobile.css";
import NavItem from "./NavItem";

function NavigationMobile() {
  const currentlySelected = window.location.href.split("/")[3];

  if (window.location.href.split("/")[3].startsWith("?")) {
    console.log("here");
    currentlySelected = "";
  }

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

  return (
    <div className="navigation">
      <NavItem to="/" iconClass="fa-brands fa-spotify" />
      <NavItem
        to="/"
        iconClass="fa-solid fa-user"
        isMiddle
        isActive={currentlySelected === ""}
        onToggleActive={handleToggle}
      >
        Profile
      </NavItem>
      <NavItem
        to="/artists"
        iconClass="fa-solid fa-microphone"
        isMiddle
        isActive={currentlySelected === "artists"}
        onToggleActive={handleToggle}
      >
        Top Artists
      </NavItem>
      <NavItem
        to="/tracks"
        iconClass="fa-solid fa-music"
        isMiddle
        isActive={currentlySelected === "tracks"}
        onToggleActive={handleToggle}
      >
        Top Tracks
      </NavItem>
      <NavItem
        to="/recent"
        iconClass="fa-solid fa-clock"
        isMiddle
        isActive={currentlySelected === "recent"}
        onToggleActive={handleToggle}
      >
        Recent
      </NavItem>
      <a
        href="https://github.com/andrej-koman/spotify-stats"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github icon" />
      </a>
    </div>
  );
}

export default NavigationMobile;
