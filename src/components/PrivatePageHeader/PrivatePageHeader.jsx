import { BurgerMenuBtn } from "../BurgerMenuBtn/BurgerMenuBtn";
import { Logo } from "../Logo/Logo";
import { TransactionHistoryNav } from "../TransactionHistoryNav/TransactionHistoryNav";
// import { useAuth } from "../../hooks/useAuth";
import { UserBarBtn } from "../UserBarBtn/UserBarBtn";
import css from "./PrivatePageHeader.module.css";
// import { RxHamburgerMenu } from "react-icons/rx";

export const PrivatePageHeader = () => {
  //   const { isLoggedIn } = useAuth;
  return (
    <header className={css.header}>
      <Logo />
      <TransactionHistoryNav />
      <UserBarBtn />
      <div className={css.burger}>
        <BurgerMenuBtn />
        {/* <RxHamburgerMenu /> */}
        {/* <BurgerMenuBtn /> */}
      </div>
    </header>
  );
};

// PrivatePageHeaderl.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
