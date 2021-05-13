import styled, { css } from "styled-components";
import { font } from "../../utils/styles";

export const StyledHeader = styled.h1`
    ${font.bold}
    ${props => (props.color && css`color: ${props.color}`)}
    ${props => headerTypes[props.type]}
`;

const headerTypes = {
    h1: css`
        ${font.size.h1}
    `,
    h2: css`
        ${font.size.h2}
    `,
    h3: css`
        ${font.size.h3}
    `
}