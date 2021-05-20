import {css} from 'styled-components/macro'

export const colors = {
    darkPurple: '#80334B',
    lightPurple: '#AF8E9A',
    darkBlue: '#182849',
    Grey: '#676069',
    darkgrey: '#b2b2b2', 
    dirtyWhite: '#EFEFF4',
    white: "#fff",
    black: "#000",
}

export const font = {
    bold: `font-family: 'Lato Bold';`,
    medium: `font-family: 'Lato Medium'; font-weight: 400;`,
    black: `font-family: 'Lato Black'`,
    regular: `font-family: 'Lato Regular';`,
    compact: `font-family: 'SfCompact Black';`,
    semibold: `font-family: 'Sf Semibold';`,
    sfRegular: `font-family: 'Sf Regular';`,
    size: (size) => `font-size: ${size}px;`
}

export const mixins = {
    clickable: css`
        cursor: pointer;
        user-select: none;
    `
}

export const sliderStyle = {
    pictureRight: 'picture-right',
    pictureLeft: 'picture-left'
}

const sizes = {
    mobile: '560px',
    tablet: "790px",
    laptop: "1164px"
}

export const devices = {
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`
}