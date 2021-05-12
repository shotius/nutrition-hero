import React from 'react'
import {StyledHeader} from './Styles'

const SectionHeader = ({ children, type, color = 'black' }) => {
    return (
        <StyledHeader
            type={type}
            color={color}
        >
            {children}
        </StyledHeader>
    )
}
export default SectionHeader