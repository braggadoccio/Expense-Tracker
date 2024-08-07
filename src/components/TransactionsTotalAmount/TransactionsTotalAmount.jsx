import css from "./TransactionsTotalAmount.module.css";
import { GoArrowDownLeft } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";

export const TransactionsTotalAmount = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Expense Log</h2>
      <p className={css.text}>
        Capture and organize every penny spent with ease! A clear view of your
        finanial habits at your fingertips.
      </p>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.span}>
            <MdOutlineArrowOutward />
          </span>
          Total Income<p></p>
        </li>
        <li className={css.item}>
          <span className={css.span}>
            <GoArrowDownLeft />
          </span>{" "}
          Total Expense<p></p>
        </li>
      </ul>
    </div>
  );
};
