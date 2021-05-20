import { Image } from "@styled-icons/boxicons-regular";
import styled, {css} from "styled-components/macro";
import { StyledHeader } from "../../shared/components/SectionHeader/Styles";
import { colors, devices, font } from "../../shared/utils/styles";
import {Wrapper,StyledText} from '../../Styles'
import { SectionDots } from "../Exercise/Styles";

export const NutritionBackground = styled.div`
    background-color: ${colors.darkBlue}
`;

export const NutritionWrap = styled(Wrapper)`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 20px 20px 20px;
    @media ${devices.tablet} {
        padding: 90px 20px 20px 20px;
        display: grid;
        grid-template-columns: 40% auto;
        column-gap: 100px;
        grid-template-rows: 50px 30px auto;
        grid-template-areas: 
            "header pic"
            "nav pic"
            "text pic";
   }
`;

export const Header = styled(StyledHeader)`
    margin: 10px auto;
    @media ${devices.tablet} {
        margin: 0px;
        grid-area: header;
    }
`;

export const Nav = styled.div`
    flex-basis: 100%;
    padding: 20px 0px 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${devices.tablet} {
        grid-area: nav;
        justify-self: start;
    }
`;



export const TextWrap = styled.div`
    @media ${devices.tablet} {
        grid-area: text;
    }
`;

export const ImageWrap = styled.div`
    width: 100%;
    height: 60vw;
    @media ${devices.tablet} {
        grid-area: pic;
        padding: 0px;
        height: 219px;
    }
    @media ${devices.laptop} {
        height: 290px;
    }
`;

export const NutritionText = styled(StyledText)`
    color: ${colors.dirtyWhite};
    margin-top: 0px;
    @media ${devices.tablet} {
        color: ${colors.white};
    }
`;

export const TextHeader = styled(StyledHeader)`
    @media ${devices.tablet} {
        margin-top: 30px;
        margin-bottom: 15px;
    }
`;