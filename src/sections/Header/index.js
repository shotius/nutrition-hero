import React from 'react'
import { Wrap, PageLogo, NavBar, Sticky, NavLink, Menu, SignUpBtn} from './Styles'
import menu from '../../shared/assests/menu.svg'

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
                    <NavLink type="login" onClick={() => {}}>login</NavLink>
                    <Menu src={menu}/>
                </NavBar>
            </Wrap>
        </Sticky>
    )
}
export default Header