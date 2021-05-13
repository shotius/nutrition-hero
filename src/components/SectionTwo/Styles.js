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
`;

export const ExerciseWrap = styled.div`
    padding: 20px 20px 50px;
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
    justify-content: space-around;
    margin: auto;
    margin-top: 32px;
    align-items: center;
    width: 80%;
`;

export const ImageWrapper = styled.div`
    width: 50%;
`;

export const TagPicture = styled.img.attrs(props => ({
    src: img
  }))`
    width: 100%;
    /* height: 100%; */
`;

export const TextWrap = styled.div`
    width: 50%;
    padding: 2em;
    ${font.normal};
`;

export const NutritionWrap = styled.div`
    margin-top: 490px;
    height: 319px ;
    /* background-color: red; */
`;