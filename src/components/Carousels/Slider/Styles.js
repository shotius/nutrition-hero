import styled, {css} from "styled-components/macro";

export const Carousel = styled.div`
    width: 100%;
    height: 720px;
    display: flex;
    background: red;
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

// export const Slide = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-basis: 20%;
//     width: 20%;
//     flex-shrink: 0;
//     flex: 1;
//     height: 100%;
//     font-size: 100px;
// `;

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