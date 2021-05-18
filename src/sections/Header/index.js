import React from 'react'
import Button from '../../shared/components/Button'
import { Wrap, PageLogo, NavBar, Sticky } from './Styles'

const Header = ({exercisesRef, nutritionRef}) => {
    return (
        <Sticky>
            <Wrap>
                <PageLogo />
                <NavBar >
                    <Button type="navLink" isActive={true} onClick={() => {}}>Exercises</Button>
                    <Button type="navLink" isActive={false} onClick={() => {}}>expreties</Button>
                    <Button type="navLink" isActive={false} onClick={() => {}}>nutrition</Button>
                    <Button type="navLink" isActive={false} onClick={() => {}}>app</Button>
                    <Button type="primary" margin="0px 31px 0px 0px" onClick={() => {}}>Sign up</Button>
                    <Button type="login" onClick={() => {}}>login</Button>
                </NavBar>
            </Wrap>
        </Sticky>
    )
}
export default Header