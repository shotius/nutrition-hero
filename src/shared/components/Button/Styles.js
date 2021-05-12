import styled, {css} from "styled-components";
import {colors, font, mixins } from '../../utils/styles'

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  background: none;
  border: none;
  ${font.normal};
  ${font.size(14)}
  ${mixins.clickable}
  ${props => buttonVariants[props.variant]}
`;

const navLink = css`
  text-transform: uppercase;
  margin-right: 31px;
  &:hover {
    border-bottom: 3px solid ${colors.darkPurple};
    ${font.bold}
  }
`;

const tagLink = css`
  &:hover {
    background-color: red;
  }
`;

const signUp = css`
  margin-right: 31px;
  height: 40px;
  width: 69px;
  background-color: ${colors.darkPurple};
  color: white;
  border: 1px solid #80334B;
  border-radius: 5px;
  &:active {
   transform: scale(0.97);
  }
`;


const buttonVariants = {
  navLink: navLink,
  tagLink: tagLink,
  signUp: signUp,
  login: css`
    text-transform: capitalize;
    color: ${colors.darkPurple};
    &:hover {
      ${font.bold};
    }
  `,
}


