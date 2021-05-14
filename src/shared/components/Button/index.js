import React from 'react'
import { StyledButton } from './Styles'

const Button = ({
    children,
    type,
    width,
    margin,
    color, 
    onhover,
    onClick,
    isActive
}) => {
    const handleClick = () => {
        onClick()
    }
    return (
        <StyledButton
            type={type}
            width={width}
            margin={margin}
            color={color}
            onhover={onhover}
            onClick={handleClick}
            isActive={isActive}
        >
            {children}
        </StyledButton>
    )
}
export default Button