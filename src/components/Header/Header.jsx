import { Logo } from "../Logo/Logo";
import { TransactionHistoryNav } from "../TransactionHistoryNav/TransactionHistoryNav";
import { BurgerMenuBtn } from "../BurgerMenuBtn/BurgerMenuBtn";

export const Header = () => {
  return (
    <header>
      <nav>
        <Logo /> <TransactionHistoryNav /> <BurgerMenuBtn />
      </nav>
    </header>
  );
};
