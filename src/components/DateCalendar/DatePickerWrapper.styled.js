import styled from "styled-components";

export const DatePickerWrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  color: #fafafa;
  display: flex;
  border-radius: 8px;
  border-color: #171719;
  padding: 6px 8px 6px;
  width: 160px;
  height: 30px;
`;

export const Icon = styled.img`
  margin-left: 50px;
  margin-top: -4px;
`;

//   padding: 0px;
// border: ${(p) => p.theme.borders.none};
//   font-size: ${(p) => p.theme.fontSizes[1]};
//   font-family: ${(p) => p.theme.fonts.body};
//   @media (max-width: 425px) {
//     margin-bottom: 12px;
//   }
//   @media (min-width: 426px) and (max-width: 1023px) {
//     font-size: ${(p) => p.theme.fontSizes[3]};
//   }
//   @media (min-width: 1024px) {
//     font-size: ${(p) => p.theme.fontSizes[3]};
//   }
//
// ${(p) => p.theme.colors.black};
