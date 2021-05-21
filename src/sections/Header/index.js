import React, { useState } from 'react'
import { Wrap, PageLogo, NavBar, Sticky, NavLink, MenuIconWrap, SignUpBtn, LoginBtn, Modal, ModalWrapper, ModalText} from './Styles'
import {Menu} from '@styled-icons/boxicons-regular/Menu'


const Header = ({exercisesRef, nutritionRef}) => {
    const [isModalShown, setIsModalShown] = useState(false)
    return (
        <>
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
                    <MenuIconWrap onClick={() => setIsModalShown(true)}>
                        <Menu size="32"/>
                    </MenuIconWrap>
                </NavBar>
            </Wrap>
        </Sticky>
        <Modal shown={isModalShown}>
            <ModalWrapper>
                <MenuIconWrap onClick={() => setIsModalShown(false)}>
                    <Menu size="50" color="white"/>
                </MenuIconWrap>
                <ModalText color="white">Exercise</ModalText>
                <ModalText color="white">Nutrition</ModalText>
                <ModalText color="white">Expertise</ModalText>
            </ModalWrapper>
        </Modal>
        </>
    )
}
export default Header