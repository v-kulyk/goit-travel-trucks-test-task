import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.navLink + " " + styles.active : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? styles.navLink + " " + styles.active : styles.navLink
            }
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
