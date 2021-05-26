import styled from "styled-components/macro";

import img from "../../shared/assests/Large Hero@2x.png";
import { StyledButton } from "../../shared/components/Button/Styles";
import { devices, font } from "../../shared/utils/styles";

export const MainSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  background-image: url("${img}");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const PageHeading = styled.h1`
  line-height: 50px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.01px;
  margin: 0px;
  ${font.size(42)};
  ${font.bold}
  @media ${devices.tablet} {
    line-height: 72px;
    letter-spacing: 0.02px;
    ${font.size(60)}
  }
`;

export const ShortDescription = styled.p`
  line-height: 28px;
  margin: 10px 0px;
  text-align: center;
  ${font.size(20)};
  ${font.regular};
  @media ${devices.tablet} {
    ${font.size(22)}
  }
`;

export const SignUpBtn = styled(StyledButton)`
  position: fixed;
  bottom: 10px;
  z-index: 999;
  width: 95%;
  height: 50px;
  ${font.regular}
  @media ${devices.tablet} {
    position: relative;
    width: 324px;
    margin-top: 39px;
  }
`;
