import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";
// import { useAuth } from "../../hooks/useAuth";

export const AuthNav = () => {
  // const isLoggedIn = useAuth();
  return (
    <div className={css.container}>
      <button type="submit" className={css.button1}>
        <Link
          to="/register"
          className={css.linkRegister}
          // className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          {/* <Button>Sign Up</Button> */}
          Sign Up
        </Link>
      </button>
      <button type="submit" className={css.button2}>
        <Link
          to="/login"
          className={css.linkLogIn}
          // className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          {/* <Button>Sign In</Button> */}
          Sign In
        </Link>
      </button>
    </div>
  );
};
