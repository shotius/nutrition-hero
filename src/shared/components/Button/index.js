import React from 'react'
import { StyledButton } from './Styles'

const Button = ({
    children,
    type,
    width,
    margin,
    color, 
    btmLine,
    onhover,
}) => {
    return (
        <StyledButton
            type={type}
            width={width}
            margin={margin}
            btmLine={btmLine}
            color={color}
            onhover={onhover}
        >
            {children}
        </StyledButton>
    )
}
export default Button