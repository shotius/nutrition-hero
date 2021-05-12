import styled, {css} from "styled-components";
import {colors, mixins } from '../../utils/styles'

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  font-family: "Lato";
  background: none;
  border: none;
  ${mixins.clickable}
  ${props => buttonVariants[props.variant]}
`;

const navLink = css`
  font-size: 14px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  margin-right: 31px;
  &:hover {
    border-bottom: 3px solid ${colors.darkPurple};
    font-weight: bold;
  }
`;

const tagLink = css`
  font-size: 14px;
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
  ${'' /* padding: 10px; */}
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
  `,
}


