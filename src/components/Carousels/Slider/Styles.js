import styled, {css} from "styled-components/macro";
import { mixins, colors} from "../../../shared/utils/styles";

export const Carousel = styled.div`
    width: 100%;
    height: 720px;
    display: flex;
    position: relative;
    overflow: hidden;
`;

export const SliderContainer = styled.div`
    display: flex;
    height: 100%;
    flex-shrink: 0;
    ${props => (props.width && css`width: ${props.width*100}%`)};
    ${props => (props.transition && css`
            transition: ${props.transition};`)};
    ${props => (props.translate 
        && css`
            transform: translate(${props.translate}%)
    `)
    }
`;

const buttonStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 52px;
    cursor: pointer;
    height: 40px;
    width: 69px;
    background-color: #FAFAFD;
    border-radius: 4px;
    border: none;
    z-index: 10;
    &:active {
        transform: scale(0.9);
    }
`;
export const ButtonLeft = styled.button`
    ${buttonStyle}
    left: 130px;
`;

export const ButtonRight = styled.button`
    ${buttonStyle}
    right: 130px;
    
`;

export const Controls = styled.div`

`;

export const Dots = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 70px;
  left: 0;
`;

export const Dot = styled.button`
  height: 12px;
  width: 5px;
  border: none;
  margin: 0 8px;
  border-radius: 6px;
  background-color: ${colors.lightPurple};
  ${mixins.clickable};
  ${props => (props.isActive 
    && css`
        background-color: ${colors.darkPurple}`)};
  &:active, &:hover {
      transform: scale(1.2);
  }
`;