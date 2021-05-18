import styled from "styled-components/macro";

import img from  '../../shared/assests/Large Hero.png'
import { StyledButton } from "../../shared/components/Button/Styles";
import { devices, font } from "../../shared/utils/styles";

export const MainSectionWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 78px);
    width: 100%;
    background-image: url('${img}');
    background-repeat: no-repeat;
    background-size: cover;
`;

export const PageHeading = styled.h1`
    font-size: 60px;
    letter-spacing: 0.02px;
    line-height: 72px;
    text-align: center;
    text-transform: capitalize;
    margin-top: 227px;
    margin-bottom: 0px;
    ${font.bold}
`;

export const ShortDescription = styled.p`
    height: 27px;
    margin-top: 10px;
    text-align: center;
    ${font.size(22)}
    ${font.regular}
`;

export const SignUpBtn = styled(StyledButton)`
    @media ${devices.mobile} {
        display: none;
        width: 0px;
    }
`;