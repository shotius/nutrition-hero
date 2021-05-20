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

export const ExerciseWrap = styled(Wrapper)`
    padding-top: 10px;
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
    margin: 10px 0px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0px 20px 20px 20px;
    @media ${devices.tablet} {
        padding: 0px 55px 40px 55px;
    }
    @media ${devices.laptop} {
        padding: 0px 85px 60px 85px;
    }
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
    flex-basis: 100%;
    height: 60vw;
    @media ${devices.tablet} {
        height: 200px;
        flex-basis: 30%;
        padding-right: 50px;
    }
    @media ${devices.laptop} {
        height: 271px;
        flex-basis: 40%;
        padding-top: 10px;
    }
`;

export const Img = styled.img.attrs(props => ({
    src: props.src
  }))`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

export const TextWrap = styled.div`
    flex: 0.9;
    @media ${devices.tablet} {
        flex-basis: 30%;
        padding-top: 10px;
    }
    @media ${devices.laptop} {
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

// style nutrition section


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

// style text

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