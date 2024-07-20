import Rectangle from "../../images/Rectangle 1.png";
import styled from "@emotion/styled";

export const BgImageWrapper = styled.div`
  @media screen (and min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 326px;

    background-image: url(${Rectangle});
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain:
  }
`;
