import React, { useState } from 'react'
import Button from '../../shared/components/Button'
import { Wrapper } from '../../Styles'
import { Wrap, PageLogo, NavBar } from './Styles'

const Header = () => {
    const [isActive, setIsActive] = useState(true)
    return (
        <Wrapper>
            <Wrap>
                <PageLogo />
                <NavBar >
                    <Button isActive={isActive} type="navLink" onClick={() => setIsActive(!isActive)}>Exercises</Button>
                    <Button type="navLink" onClick={()=> {}}>expreties</Button>
                    <Button type="navLink" onClick={()=> {}}>nutrition</Button>
                    <Button type="navLink" onClick={()=> {}}>app</Button>
                    <Button type="primary" onClick={()=> {}} margin="0px 31px 0px 0px">Sign up</Button>
                    <Button type="login" onClick={() => {}}>login</Button>
                </NavBar>
            </Wrap>
        </Wrapper>
    )
}
export default Header