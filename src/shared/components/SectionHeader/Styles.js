import styled, { css } from "styled-components/macro";
import { font } from "../../utils/styles";

export const StyledHeader = styled.h1`
    display: flex;
    ${props => (props.flexPosition && css`justify-content: ${props.flexPosition}`)};
    ${props => (props.color && css`color: ${props.color}`)};
    ${props => headerTypes[props.size]};
`;

const headerTypes = {
    large: css`
        ${font.size(42)};
        ${font.bold};
    `,
    medium: css`
        padding: 10px 0px;
        line-height: 24px;
        ${font.medium};
        ${font.size(22)};
    `,
}