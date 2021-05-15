import styled, {css} from "styled-components/macro";
import { colors, font } from "../../shared/utils/styles";
// import imkg from  '../../shared/assests/Mail_Image.png'
const url = require('/home/shoutius/sweeft_digital/workout/nutrition-react/src/shared/assests/pete.png')

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
    margin-top: -100px;
    border-radius: 20px;
    background-color: white;
    box-shadow: -5px -10px 20px #00000033;
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
    max-height: 319px;
    max-width: 494px;
`;

export const TagPicture = styled.img.attrs(props => ({
    src: props.src
  }))`
    height: 100%;
    width: 100%;
`;

export const TextWrap = styled.div`
    width: 42%;
    ${props => (props.color && css`color: ${colors[props.color]}`)};
    ${font.regular};
    line-height: 24px;
`;

export const NutritionWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 90px 0px 50px;
    position: relative;
    width: 100%;
`;