import styled, {css} from "styled-components/macro";
import { StyledHeader } from "../../shared/components/SectionHeader/Styles";
import { colors, devices, font } from "../../shared/utils/styles";
import {Wrapper,StyledText} from '../../Styles'
import { Dots } from '../Carousels/Slider/Styles'

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


export const SectionDots = styled(Dots)`
    bottom: 0px;
    position: relative;
    padding-top: 10px;
    @media ${devices.tablet} {
        display: none;
    }
`;

export const InfoWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const TextWrap = styled.div`
    
`;

export const NutritionText = styled(StyledText)`
color: ${colors.dirtyWhite};
@media ${devices.tablet} {
    color: ${colors.white};
}
`;