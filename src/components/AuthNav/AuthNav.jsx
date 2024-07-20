import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <nav>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <Button>Sign Up</Button>
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <Button>Sign In</Button>
      </NavLink>
    </nav>
  );
};
