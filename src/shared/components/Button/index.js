import React from 'react'
import { StyledButton } from './Styles'

const Button = ({
    children,
    variant,
    width,
    margin,
}) => {
    return (
        <StyledButton
            variant={variant}
            width={width}
            margin={margin}
        >
            {children}
        </StyledButton>
    )
}
export default Button