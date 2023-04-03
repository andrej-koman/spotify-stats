import { Link } from "react-router-dom";
import "./Button.css";

function Button({ style, to, onClick, children }) {
  return (
    <Link style={{ textDecoration: 'none', ...style }} to={to} onClick={onClick}>
      <div className="button-style">
        {children}
      </div>
    </Link>
  );
}

export default Button;