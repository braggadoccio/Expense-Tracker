import { Logo } from "../Logo/Logo";
// import { TransactionHistoryNav } from "../TransactionHistoryNav/TransactionHistoryNav";
// import { BurgerMenuBtn } from "../BurgerMenuBtn/BurgerMenuBtn";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/">
      <Logo />
    </Link>
  );
};
