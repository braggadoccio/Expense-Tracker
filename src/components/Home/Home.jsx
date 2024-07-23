import { AuthNav } from "../AuthNav/AuthNav";
// import { AllUsersTab } from "../AllUsersTab/AllUsersTab";
import css from "./Home.module.css";

export const Home = () => {
  return (
    <div className={css.container}>
      <p className={css.topText}>EXPENSE LOG</p>
      <h1 className={css.title}>
        Manage Your <span className={css.span}>Finances</span> Masterfully!
      </h1>
      <p className={css.bottomText}>
        ExpenseTracker effortlessly empowers you to take control of your
        finances! With intuitive features, it simplifies the process of tracking
        and managing expenses, allowing for a stress-free mastery over your
        financial world.
      </p>
      <AuthNav />
      {/* <AllUsersTab /> */}
    </div>
  );
};
