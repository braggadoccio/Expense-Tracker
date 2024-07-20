import { AuthNav } from "../AuthNav/AuthNav";

export const Home = () => {
  return (
    <div>
      <p>EXPENSE LOG</p>
      <h1>
        Manage Your <span>Finances</span>Masterfully!
      </h1>
      <p>
        ExpenseTracker effortlessly empowers you to take control of your
        finances! With intuitive features, it simplifies the process of tracking
        and managing expenses, allowing for a stress-free mastery over your
        financial world.
      </p>
      <AuthNav />
    </div>
  );
};
