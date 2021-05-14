import styled from "styled-components";
import { colors, font } from "../../../shared/utils/styles";

export const SliderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 720px;
`;

export const ImgWrap = styled.div`
    width: 50%;
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

export const Img = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100%;
    height: 100%;
`;