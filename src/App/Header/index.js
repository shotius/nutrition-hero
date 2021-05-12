import React from 'react'
import Button from '../../shared/components/Button'
import { Wrap, PageLogo, NavBar } from './Styles'

const Header = () => {
    return (
        <Wrap>
            <PageLogo />
            <NavBar >
                <Button variant="navLink">Exercises</Button>
                <Button variant="navLink">expreties</Button>
                <Button variant="navLink">nutrition</Button>
                <Button variant="navLink">app</Button>
                <Button variant="signUp">Sign up</Button>
                <Button variant="login">login</Button>
            </NavBar>
        </Wrap>
    )
}
export default Header