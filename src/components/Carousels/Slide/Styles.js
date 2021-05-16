
import styled, { css } from "styled-components/macro";
import { font } from '../../../shared/utils/styles'


export const SlideWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    flex: 1;
    height: 100%;
    padding: 0px 5px;
    ${props => (props.width 
        && css`
            flex-basis: ${props.width}%;
            width: ${props.width}%;
    `)};
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