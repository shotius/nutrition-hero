import styled from "styled-components/macro";
import { font, devices } from "./shared/utils/styles";

export const Wrapper = styled.div`
    padding: 0px 16px;
    position: relative;
    margin: 0 auto;
    @media ${devices.tablet} {
        padding: 0px;
        width: 700px;
    }
    @media ${devices.laptop} {
        width: 1000px;
    } 
`;

export const Img = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100%;
    height: 100%;
`;


export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    line-height: 24px;
    ${font.regular};
`;
