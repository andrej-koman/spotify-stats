import NavItem from "./NavItem";
import NavigationMiddle from "./NavigationMiddle";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <NavItem to="/" iconClass="fa-brands fa-spotify" />
      <NavigationMiddle />
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

export default Navigation;