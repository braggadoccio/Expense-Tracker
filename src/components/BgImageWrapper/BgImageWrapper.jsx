import Rectangle from "../../images/Rectangle.jpg";
// import css from "./BgImageWrapper.module.css";
import RectangleMobile from "../../images/Rectangle.mobile.jpg";
import RectangleTablet from "../../images/Rectangle.tablet.jpg";
import styled from "styled-components";

export const BgImageWrapper = styled.div`
  @media (min-width: 375px) and (max-width: 767px) {
    background-image: url(${RectangleMobile});
    height: 345px;
    width: 314px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    // margin-left: 20px;
    margin-top: 38px;
    // background-position: center;
  }

  @media (min-width: 768px) and (max-width: 1157px) {
    background-image: url(${RectangleTablet});
    background-repeat: no-repeat;
    background-size: cover;
    height: 370px;
    width: 704px;
    // margin-left: 25px;
    // margin-top: 120px;
    border-radius: 20px;
  }

  @media (min-width: 1158px) and (max-width: 1440px) {
    background-image: url(${Rectangle});
    background-repeat: no-repeat;
    background-size: cover;
    width: 611px;
    height: 545px;
    border-radius: 20px;
  }
`;
// export const BgImageWrapper = () => {
//   return (
//     <div>
//       <img src={Rectangle} alt="Rectangle" className={css.image} />
//     </div>
//   );
// };
