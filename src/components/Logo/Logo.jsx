import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <img src="../../images/logo.png" alt="logo" />
      </NavLink>
    </>
  );
};
