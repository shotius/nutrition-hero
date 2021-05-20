import styled, {css} from "styled-components/macro";
import { StyledHeader } from "../../shared/components/SectionHeader/Styles";
import { colors, devices, font } from "../../shared/utils/styles";
import {Wrapper} from '../../Styles'
import {Dot, Dots} from '../Carousels/Slider/Styles'

export const ExerciseBackground = styled.div`
    padding: 20px 0px;
    background-color: ${colors.white};
    @media ${devices.tablet} {
        background-color: ${colors.darkBlue};
    }
`;

export const NutritionBackground = styled.div`
    background-color: ${colors.darkBlue}
`;

export const ExerciseWrap = styled(Wrapper)`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    position: relative;
    background-color: white;
    box-shadow: -5px -10px 10px #00000033, 5px 10px 20px #00000033;
    border-radius: 20px;
    @media ${devices.tablet} {
    }
    @media ${devices.laptop} {
        margin-top: -100px;
    }
`;

export const Header = styled(StyledHeader)`
    flex-basis: 100%;
    margin: 10px 0px;
`;

export const TagLinks = styled.div`
    flex-basis: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 28px;
    ${props => props.flexPosition && css`justify-content: ${props.flexPosition}`}
`;


export const ImageWrapper = styled.div`
    margin-top: 20px;
    flex: 1;
    display: flex;
    flex-basis: 100%;
    height: 60vw;
`;

export const TagPicture = styled.img.attrs(props => ({
    src: props.src
  }))`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const TextWrap = styled.div`
    flex: 0.9;
`;

const styledText = css`
    line-height: 20px;
    ${font.sfRegular};
    ${font.size(15)};
    @media ${devices.tablet} {
        line-height: 24px;
        ${font.regular};
        ${font.size(16)};
    }
`;

export const ExerciseText = styled.p`
    ${styledText};
    color: ${colors.Grey};
    margin-top: 0px;
    @media ${devices.tablet} {
        color: ${colors.black};
    }
`;

export const NutritionText = styled.p`
    ${styledText};
    color: ${colors.dirtyWhite};
    @media ${devices.tablet} {
        color: ${colors.white};
    }
`;

export const NutritionWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 90px 0px 50px;
    position: relative;
    width: 100%;
`;

export const SectionDots = styled(Dots)`
    bottom: 0px;
    position: relative;
    @media ${devices.tablet} {
        display: none;
    }
`;

console.log(NutritionWrap)