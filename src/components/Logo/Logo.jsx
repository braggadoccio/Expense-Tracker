// import { NavLink } from "react-router-dom";
// import css from "./Logo.module.css";
import logoMobile from "../../images/logoMobile.png";
import logo from "../../images/logo.png";
import styled from "styled-components";

export const Logo = styled.div`
  @media (min-width: 375px) and (max-width: 767px) {
    background-image: url(${logoMobile});
    height: 23px;
    width: 200px;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 70px;
    margin-left: 20px;
    background-size: contain;
  }

  @media (min-width: 768px) and (max-width: 1157px) {
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding-top: 60px;
    margin-left: 200px;
    width: 226px;
    height: 23px;
  }

  @media (min-width: 1158px) and (max-width: 1440px) {
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding-top: 80px;
    width: 207px;
    height: 30px;
    margin-left: 410px;
  }
`;
// export const Logo = () => {
//   return (
//     <div>
//       <img src={logo} alt="logo" />
//     </div>
//   );
// };
