import styled, {css} from "styled-components";
import { colors, font } from "../../shared/utils/styles";
import img from  '../../shared/assests/Mail_Image.png'
const url = require('/home/shoutius/sweeft_digital/workout/nutrition-react/src/shared/assests/pete.png')

export const SectionTwoWrap = styled.div`
    display: flex;
    justify-content: center; 
    height: 900px;
    width: 100%;
    background-color: ${colors.darkBlue};
    overflow: hidden;
`;

export const ExerciseWrap = styled.div`
    position: absolute;
    width: 70%;
    height: 512px;
    margin-top: -100px;
    border-radius: 10px;
    background-color: white;
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
    margin-top: 32px;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-height: 260px;
`;

export const TagPicture = styled.img.attrs(props => ({
    src: img
  }))`
    margin-top: 35px;
    width: 40%;
    height: 100%;
`;

export const TextWrap = styled.div`
    width: 30%;
    ${font.normal};
`;

export const NutritionWrap = styled.div`
    margin-top: 490px;
    height: 319px ;
    /* background-color: red; */
`;