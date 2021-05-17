import styled from "styled-components/macro";
import { font } from "./shared/utils/styles";

export const Wrapper = styled.div`
    width: 75%;
    max-width: 1100px;
    margin: 0 auto;
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
