import React from 'react'
import { StyledButton } from './Styles'

const Button = ({
    children,
    type,
    width,
    margin,
    color, 
    btmLine
}) => {
    return (
        <StyledButton
            type={type}
            width={width}
            margin={margin}
            btmLine={btmLine}
            color={color}
        >
            {children}
        </StyledButton>
    )
}
export default Button