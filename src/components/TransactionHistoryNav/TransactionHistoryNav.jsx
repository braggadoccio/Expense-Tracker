import css from "./TransactionHistory.module.css";

export const TransactionHistoryNav = () => {
  return (
    <div className={css.container}>
      <button className={css.button}>All Expense</button>
      <button className={css.button}>All Income</button>
    </div>
  );
};
