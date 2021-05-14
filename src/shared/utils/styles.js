import {css} from 'styled-components'

export const colors = {
    darkPurple: '#80334B',
    darkBlue: '#182849',
    Grey: '#676069',
    dirtyWhite: '#EFEFF4',
    white: "#fff",
    black: "#000"
}

export const font = {
    bold: `font-family: 'Lato', sans-serif; font-weight: bold;`,
    medium: `font-family: 'Lato', sans-serif; font-weight: 500;`,
    regular: `font-family: 'Lato', sans-serif; font-weight: normal;`,
    size: (size) => `font-size: ${size}px;`
}

export const mixins = {
    clickable: css`
        cursor: pointer;
        user-select: none;
    `
}