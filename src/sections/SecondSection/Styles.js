import styled, {css} from "styled-components/macro";
import { colors, devices, font } from "../../shared/utils/styles";

export const SectionTwoWrap = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
    background-color: ${colors.darkBlue};
`;

export const ExerciseWrap = styled.div`
    padding: 20px 0px 50px;
    position: relative;
    width: 100%;
    border-radius: 20px;
    background-color: white;
    box-shadow: -5px -10px 20px #00000033;
    @media ${devices.laptop} {
        margin-top: -100px;
    }
`;

export const TagLinks = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 28px;
    ${props => props.flexPosition && css`justify-content: ${props.flexPosition}`}
`;

export const TagInfoWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 32px;
    align-items: center;
    width: 80%;
`;

export const ImageWrapper = styled.div`
    width: 50%;
    height: 271px;
    max-width: 409px;
`;

export const TagPicture = styled.img.attrs(props => ({
    src: props.src
  }))`
    height: 100%;
    width: 100%;
`;

export const TextWrap = styled.div`
    width: 42%;
    line-height: 20px;
    color: ${colors.Grey};
    ${font.sfRegular};
    ${font.size(15)};
    @media ${devices.tablet} {
        line-height: 24px;
        ${font.regular};
        ${font.size(16)};
        ${props => (props.color 
            ? css`
                color: ${colors[props.color]};`
            : css`
                color: ${colors.black}`)};

    }
`;

export const NutritionWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 90px 0px 50px;
    position: relative;
    width: 100%;
`;