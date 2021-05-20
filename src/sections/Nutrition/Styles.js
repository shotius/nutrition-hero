import { Image } from "@styled-icons/boxicons-regular";
import styled, {css} from "styled-components/macro";
import { StyledHeader } from "../../shared/components/SectionHeader/Styles";
import { colors, devices, font } from "../../shared/utils/styles";
import {Wrapper,StyledText} from '../../Styles'
import { SectionDots } from "../Exercise/Styles";
import { ImageWrapper } from "../SecondSection/Styles";

export const NutritionBackground = styled.div`
    background-color: ${colors.darkBlue}
`;

export const NutritionWrap = styled(Wrapper)`
display: flex;
flex-wrap: wrap;
padding: 20px;
/* justify-content: space-between;
padding: 90px 0px 50px;
position: relative;
width: 100%; */
`;

export const Header = styled(StyledHeader)`
    margin: 10px auto;
`;

export const InfoWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Nav = styled.div`
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageWrap = styled(ImageWrapper)`
    order: 1;
`;

export const TextWrap = styled.div`
    order: 2;
`;

export const NutritionText = styled(StyledText)`
    color: ${colors.dirtyWhite};
    @media ${devices.tablet} {
        color: ${colors.white};
    }
`;

export const Dots = styled(SectionDots)`
    order: 3;
`;