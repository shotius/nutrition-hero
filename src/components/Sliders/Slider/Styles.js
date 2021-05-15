import styled, {css} from "styled-components/macro";

export const SliderWrapper = styled.div`
  width: 100%;    
  height: 730px;
  border: 1px solid #EFEFF4;
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

export const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-shrink: 0;
    font-size: 100px;
    /* border: 1px solid red; */
    ${props => (props.transition && css`
            transition: ${props.transition};`)};
    ${props => (props.translate 
        && css`
            transform: translate(${props.translate}%)
    `)
    }
`;

export const ButtonLeft = styled.button`
    position: absolute;
    height: 100%;
    left: 0px;
    z-index: 10;
`;

export const ButtonRight = styled.button`
    position: absolute;
    height: 100%;
    right: 0px;
    z-index: 10;
`;