import css from "./BurgerMenuBtn.module.css";

export const BurgerMenuBtn = () => {
  return (
    <div className={css.menuBurger}>
      <svg className={css.burgerIcon} width="44" height="44">
        <use href="/src/images/menu-05.svg#icon-burger"></use>
      </svg>
    </div>
  );
};

// import { RxHamburgerMenu } from "react-icons/rx";

// export const BurgerMenuBtn = () => {
//   return (
//     <div className={css.burger}>
//       <RxHamburgerMenu />
//     </div>
//   );
// };

// import styled from "@emotion/styled/macro";
// import Burger from "../../images/menu-05.svg";

// export const BurgerMenuBtn = styled.div`
//   @media screen (and min-width: 768px) {
//     // display: grid;
//     // grid-template-columns: 1fr;
//     // grid-template-rows: 1fr 326px;
//     background-image: url(${Burger});
//     background-repeat: no-repeat, no-repeat;
//     background-color: #fafafa;
//   }
// `;
