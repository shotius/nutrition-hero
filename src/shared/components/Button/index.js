import React from 'react'
import { StyledButton } from './Styles'

const Button = ({
    children,
    type,
    width,
    margin,
    btmLine
}) => {
    return (
        <StyledButton
            type={type}
            width={width}
            margin={margin}
            btmLine={btmLine}
        >
            {children}
        </StyledButton>
    )
}
export default Button