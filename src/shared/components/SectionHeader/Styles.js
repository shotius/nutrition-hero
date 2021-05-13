import styled, { css } from "styled-components";
import { font } from "../../utils/styles";

export const StyledHeader = styled.h1`
    display: flex;
    ${font.bold};
    ${props => (props.flexPosition && css`justify-content: ${props.flexPosition}`)};
    ${props => (props.color && css`color: ${props.color}`)};
    ${props => headerTypes[props.size]};
`;

const headerTypes = {
    large: css`
        ${font.size(42)};
    `,
    medium: css`
        ${font.size(22)}
    `,
}