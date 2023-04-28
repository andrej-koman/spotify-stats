import "./NavItem.css";
import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function NavItem(props) {
  let { to, iconClass, isMiddle, isActive } = props;
  const idRef = createRef(uuidv4());
  let navItemClass = 'nav-item';
  
  if (isActive) {
    navItemClass = navItemClass + ' active';
  } else {
    navItemClass = navItemClass.replace(' active', '');
  }
  
  iconClass = iconClass + ' icon';

  return (
    <>
      {isMiddle ? (
        <Link to={to} style={{ textDecoration: 'none' }}>
          <div
            className={navItemClass}
            ref={idRef}
          >
            <i className={iconClass} />
            <span className="nav-item-text">{props.children}</span>
          </div>
        </Link>
      ) : (
        <Link to={to} style={{ textDecoration: 'none' }}>
          <i className={iconClass} />
        </Link>
      )}
    </>
  );
}

export default NavItem;