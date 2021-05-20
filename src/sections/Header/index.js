import React from 'react'
import { Wrap, PageLogo, NavBar, Sticky, NavLink, MenuIconWrap, SignUpBtn, LoginBtn} from './Styles'
import {Menu} from '@styled-icons/boxicons-regular/Menu'


const Header = ({exercisesRef, nutritionRef}) => {
    return (
        <Sticky>
            <Wrap>
                <PageLogo />
                <NavBar >
                    <NavLink type="navLink" isActive={true} onClick={() => {}}>Exercises</NavLink>
                    <NavLink type="navLink" isActive={false} onClick={() => {}}>expreties</NavLink>
                    <NavLink type="navLink" isActive={false} onClick={() => {}}>nutrition</NavLink>
                    <NavLink type="navLink" isActive={false} onClick={() => {}}>app</NavLink>
                    <SignUpBtn type="primary" onClick={() => {}}>Sign up</SignUpBtn>
                    <LoginBtn type="login" onClick={() => {}}>login</LoginBtn>
                    <MenuIconWrap>
                        <Menu size="32"/>
                    </MenuIconWrap>
                </NavBar>
            </Wrap>
        </Sticky>
    )
}
export default Header