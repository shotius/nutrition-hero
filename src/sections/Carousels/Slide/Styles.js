
import styled, { css } from "styled-components/macro";

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
    ${props => (props.order 
        && css`
            order: ${props.order}`)};
`;
