import styled, {css} from "styled-components";
import { colors } from "../../shared/utils/styles";

export const SectionTwoWrap = styled.div`
    display: flex;
    justify-content: center; 
    height: 904px;
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
`

export const TagInfoWrap = styled.div`
     display: flex;
    margin-top: 55px;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    background-color: red;
`