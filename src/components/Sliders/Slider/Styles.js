import styled, {css} from "styled-components/macro";


export const Carousel = styled.div`
    width: 100%;
    height: 720px;
    border: 2px solid green;
    display: flex;
    background: red;
    overflow: hidden;
`;

export const SliderContainer = styled.div`
    display: flex;
    height: 100%;
    width: 500%;
    flex-shrink: 0;
    ${props => (props.transition && css`
            transition: ${props.transition};`)};
    ${props => (props.translate 
        && css`
            transform: translate(${props.translate}%)
    `)
    }
`;

export const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
    width: 20%;
    flex-shrink: 0;
    flex: 1;
    height: 100%;
    font-size: 100px;
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