import React from 'react'
import { StyledButton } from './Styles'

const Button = ({
    children,
    variant
}) => {
    return (
        <StyledButton
            variant={variant}
        >
            {children}
        </StyledButton>
    )
}
export default Button