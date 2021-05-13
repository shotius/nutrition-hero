import styled, {css} from "styled-components";
import { colors } from "../../shared/utils/styles";
import img from  '../../shared/assests/Mail_Image.png'
const url = require('/home/shoutius/sweeft_digital/workout/nutrition-react/src/shared/assests/pete.png')

export const SectionTwoWrap = styled.div`
    display: flex;
    justify-content: center; 
    height: 100vh;
    width: 100%;
    background-color: ${colors.darkBlue};
    overflow: hidden;
`;

export const ExerciseWrap = styled.div`
    position: absolute;
    width: 1004px;
    height: 462px;
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
    padding-bottom: 40px;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const TagPicture = styled.img.attrs(props => ({
    src: img
  }))`
    width: 409px;
`;

export const TextWrap = styled.div`
    width: 30%;
`;