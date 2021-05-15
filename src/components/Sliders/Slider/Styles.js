import styled, {css} from "styled-components/macro";

export const Container = styled.div`
    margin-top: 8px;
    width: 100%;
    height: 500px;
`;

export const Carousel = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid green;
    display: flex;
    /* justify-content: flex-start; */
`;

export const SliderWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    height: 100%;
    width: 500%;
    flex-shrink: 0;
`;

export const Slide = styled.div`
    flex-basis: 20%;
    width: 20%;
    flex-shrink: 0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
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