import styled, {css} from "styled-components";
import {colors, font, mixins } from '../../utils/styles'

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25px;
  background: none;
  border: none;
  transition: all 0.02s;
  ${props => (props.margin ? css`margin: ${props.margin};`: css`margin: 0px;`)}
  ${font.normal};
  ${font.size(14)};
  ${mixins.clickable};
  ${props => buttonVariants[props.type]};
`;


const btmLine = css`
 &::after {
    display: block;
    content: "";
    position: relative;
    top: 3px;
    border-radius: 2px;    
    border: 2px solid #fff;
    ${props => (props.btmLine 
      ? css`
      width: ${props.btmLine.width};
      border-width: ${props.btmLine.height}` 
      : css`
      width: 100%;`)};
    }
  &:hover:after {
    background: ${colors.darkPurple};
    border-color:${colors.darkPurple};
  }
`
const navLink = css`
  text-transform: uppercase;
  margin-right: 31px;
  margin-top: 7px;
  ${btmLine}
  
`;

const tagLink = css`
  text-transform: capitalize;
  padding: 0px 15px;
  color: ${colors.Grey};
  ${btmLine}
`;

const primary = css`
  height: 40px;
  ${props => (props.width ? css`
    width: ${props.width};`
    : css`
    width: 69px;
  `)};
  background-color: ${colors.darkPurple};
  color: white;
  border: 1px solid #80334B;
  border-radius: 5px;
  &:active {
   transform: scale(0.97);
  }
  &:hover {
    opacity: 0.7;
    box-shadow: 1px 0px 7px grey;
  }
`;


const buttonVariants = {
  navLink: navLink,
  tagLink: tagLink,
  primary: primary,
  login: css`
    text-transform: capitalize;
    color: ${colors.darkPurple};
    &:hover {
      ${font.bold};
    }
  `,
}