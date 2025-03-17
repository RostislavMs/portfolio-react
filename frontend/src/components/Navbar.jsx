import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__link" to="/skills">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__link" to={"portfolio"}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__link" to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
