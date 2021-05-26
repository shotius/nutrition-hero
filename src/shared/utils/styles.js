import { css } from "styled-components/macro";

export const colors = {
  darkPurple: "#80334B",
  lightPurple: "#AF8E9A",
  darkBlue: "#182849",
  Grey: "#676069",
  darkgrey: "#b2b2b2",
  dirtyWhite: "#EFEFF4",
  white: "#fff",
  black: "#000",
  semiGrey: "#F8F8F8",
};

export const font = {
  bold: `font-family: 'Lato Bold';`,
  medium: `font-family: 'Lato Medium'; font-weight: 400;`,
  black: `font-family: 'Lato Black'`,
  regular: `font-family: 'Lato Regular';`,
  compact: `font-family: 'SfCompact Black';`,
  semibold: `font-family: 'Sf Semibold';`,
  sfRegular: `font-family: 'Sf Regular';`,
  size: (size) => `font-size: ${size}px;`,
};

export const mixins = {
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
};

export const sliderStyle = {
  pictureRight: "picture-right",
  pictureLeft: "picture-left",
};

export const sizes = {
  mobile: "560",
  tablet: "790",
  laptop: "1164",
};

export const devices = {
  mobile: `(min-width: ${sizes.mobile}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  laptop: `(min-width: ${sizes.laptop}px)`,
};
