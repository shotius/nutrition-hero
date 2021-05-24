import styled from "styled-components/macro";
import { font, devices } from "./shared/utils/styles";

export const Wrapper = styled.div`
    padding: 0px 16px;
    position: relative;
    margin: 0 auto;
    @media ${devices.tablet} {
        width: 700px;
        padding: 0px;
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
    flex-basis: 100%;
    line-height: 24px;
    ${font.regular};
    @media ${devices.tablet} {
        flex-basis: 50%;
    }
`;

export const StyledText = styled.p`
    line-height: 20px;
    ${font.sfRegular};
    ${font.size(15)};
    height: 100%;
    @media ${devices.tablet} {
        line-height: 24px;
        ${font.regular};
        ${font.size(16)};
    }
`;