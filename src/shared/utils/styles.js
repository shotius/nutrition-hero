import {css} from 'styled-components'

export const colors = {
    darkPurple: '#80334B',
    darkBlue: '#182849'
}

export const font = {
    normal: `font-family: Lato; font-weight: normal;`,
    bold: `font-family: Lato; font-weight: bold;`,
    size: (size) => `font-size: ${size}px;`
}

export const mixins = {
    clickable: css`
        cursor: pointer;
        user-select: none;
    `
}