import css from "./TransactionHistoryNav.module.css";
import { NavLink } from "react-router-dom";

export const TransactionHistoryNav = () => {
  return (
    <div className={css.container}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <button className={css.button}>All Expense</button>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <button className={css.button}>All Income</button>
      </NavLink>
    </div>
  );
};
