import NavItem from "./NavItem";
import "./NavigationMiddle.css";

function NavigationMiddle() {
  return (
    <div className="navigation-middle">
      <NavItem
        to="/"
        iconClass="fa-solid fa-user"
        isMiddle
      >
        Profile
      </NavItem>
      <NavItem
        to="/artists"
        iconClass="fa-solid fa-microphone"
        isMiddle
      >
        Top Artists
      </NavItem>
      <NavItem
        to="/tracks"
        iconClass="fa-solid fa-music"
        isMiddle
      >
        Top Tracks
      </NavItem>
      <NavItem
        to="/recent"
        iconClass="fa-solid fa-clock"
        isMiddle
      >
        Recent
      </NavItem>
    </div>
  );
}

export default NavigationMiddle;