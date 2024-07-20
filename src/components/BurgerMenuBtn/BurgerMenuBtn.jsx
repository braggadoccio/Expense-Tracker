import styled from "@emotion/styled/macro";
import Burger from "../../images/menu-05.svg";

export const BurgerMenuBtn = styled.div`
  @media screen (and min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 326px;
    background-image: url(${Burger});
    background-repeat: no-repeat, no-repeat;
  }
`;
