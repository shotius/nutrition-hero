import styled, { css } from "styled-components/macro";
import { devices, font } from "../../utils/styles";

export const StyledHeader = styled.h1`
    display: flex;
    ${props => (props.flexPosition && css`justify-content: ${props.flexPosition}`)};
    ${props => (props.color && css`color: ${props.color}`)};
    ${props => headerTypes[props.size]};
`;

const headerTypes = {
    large: css`
        ${font.size(30)};
        ${font.bold};
        @media ${devices.laptop} {
            ${font.size(42)};
        }
    `,
    medium: css`
        padding: 10px 0px;
        letter-spacing: -0.01px;
        line-height: 22px;
        ${font.semibold};
        ${font.size(17)};
        @media ${devices.laptop} {
            letter-spacing: 0px;
            line-height: 24px;
            ${font.size(22)};
            ${font.medium};
        }
    `,
}