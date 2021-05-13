import React from 'react'
import Button from '../../shared/components/Button'
import { Wrap, PageLogo, NavBar } from './Styles'

const Header = () => {
    return (
        <Wrap>
            <PageLogo />
            <NavBar >
                <Button type="navLink">Exercises</Button>
                <Button type="navLink">expreties</Button>
                <Button type="navLink">nutrition</Button>
                <Button type="navLink">app</Button>
                <Button type="primary" margin="0px 31px 0px 0px">Sign up</Button>
                <Button type="login">login</Button>
            </NavBar>
        </Wrap>
    )
}
export default Header