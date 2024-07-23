import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <button type="submit" className={css.button1}>
        <NavLink
          to="/register"
          className={css.link}
          // className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          {/* <Button>Sign Up</Button> */}
          Sign Up
        </NavLink>
      </button>
      <button type="submit" className={css.button2}>
        <NavLink
          to="/login"
          className={css.link}
          // className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          {/* <Button>Sign In</Button> */}
          Sign In
        </NavLink>
      </button>
    </nav>
  );
};
