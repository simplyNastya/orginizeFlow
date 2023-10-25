import { NavLink } from "react-router-dom";
import items from "../../data/navbarMenuData.json";

const NavbarMenuItems = () => {
  const elements = items.map(({ id, text, link }) => {
    return (
      <li key={id} className="nav-item">
        <NavLink to={link} className="nav-link">
          {text}
        </NavLink>
      </li>
    );
  });
  return <ul className="nav-list">{elements}</ul>;
};

export default NavbarMenuItems;
