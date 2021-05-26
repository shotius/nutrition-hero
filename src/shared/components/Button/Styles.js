import styled, { css } from "styled-components/macro";
import { colors, font, mixins } from "../../utils/styles";

export const StyledButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25px;
  background: none;
  border: none;
  transition: all 0.02s;
  ${font.regular};
  ${font.size(14)};
  ${mixins.clickable};
  ${(props) => buttonVariants[props.type]};
`;

const btmLine = css`
  &::after {
    display: block;
    content: "";
    position: relative;
    top: 4px;
    border-radius: 2px;
    border: 2px solid;
    ${(props) =>
      props.isActive
        ? css`
            background: ${colors.darkPurple};
            border-color: ${colors.darkPurple};
          `
        : css`
            border-color: transparent;
          `}
    ${(props) =>
      props.type === "tagLink"
        ? css`
            width: 160%;
            border-width: 1px;
          `
        : css`
            width: 100%;
          `}
  }
  &:hover:after {
    background: ${colors.darkPurple};
    border-color: ${colors.darkPurple};
  }
`;

const navLink = css`
  text-transform: uppercase;
  margin-top: 7px;
  line-height: 17px;
  ${btmLine};
  ${(props) =>
    props.isActive &&
    css`
      ${font.bold}
    `}
`;

const tagLink = css`
  text-transform: capitalize;
  padding: 0px 15px;
  margin-right: 16px;
  font-size: 12px;
  ${btmLine}
  ${(props) =>
    props.isActive &&
    css`
      ${font.bold}
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${colors[props.color]};
    `};
`;

const primary = css`
  height: 40px;
  background-color: ${colors.darkPurple};
  color: white;
  border: 1px solid #80334b;
  border-radius: 5px;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};
  &:active {
    transform: scale(0.97);
  }
  &:hover {
    opacity: 0.7;
    box-shadow: 1px 0px 7px grey;
  }
`;

const text = css`
  background-color: black;
`;

const buttonVariants = {
  navLink: navLink,
  tagLink: tagLink,
  primary: primary,
  text: text,
};
