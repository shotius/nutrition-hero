import React, { useEffect, useState } from 'react'
import { Wrap, PageLogo, NavBar, Sticky, NavLink, IconWrap, SignUpBtn, LoginBtn, Modal, ModalWrapper, ModalText, ModalSignUp, ModalLogin} from './Styles'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { useScroll } from '../../shared/hooks/useScroll'
import { useActiveNav } from '../../shared/hooks/useActiveNav'

const Header = (refs) => {
    const [isModalShown, setIsModalShown] = useState(false)
    const {
        isExerciseActive,
        isNutritionActive,
        isExpertiesActive,
        isAppActive,
    } = useActiveNav(refs)

    return (
        <>
        <Sticky>
            <Wrap>
                <PageLogo />
                <NavBar >
                    <NavLink type="navLink" isActive={isExerciseActive} onClick={() => {}}>Exercises</NavLink>
                    <NavLink type="navLink" isActive={isNutritionActive} onClick={() => {}}>nutrition</NavLink>
                    <NavLink type="navLink" isActive={isExpertiesActive} onClick={() => {}}>expreties</NavLink>
                    <NavLink type="navLink" isActive={isAppActive} onClick={() => {}}>app</NavLink>
                    <SignUpBtn type="primary" onClick={() => {}}>Sign up</SignUpBtn>
                    <LoginBtn type="login" onClick={() => {}}>login</LoginBtn>
                    <IconWrap onClick={() => setIsModalShown(true)}>
                        <Menu size="32"/>
                    </IconWrap>
                </NavBar>
            </Wrap>
        </Sticky>
        <Modal shown={isModalShown}>
            <ModalWrapper>
                <IconWrap onClick={() => setIsModalShown(false)}>
                    <CloseOutline size="50" color="white"/>
                </IconWrap>
                <div>
                    <ModalText color="white">Exercise</ModalText>
                    <ModalText color="white">Nutrition</ModalText>
                    <ModalText color="white">Expertise</ModalText>
                </div>
                <div>
                    <ModalSignUp type="primary" onClick={() => {}}>Sign up</ModalSignUp>
                    <ModalLogin type="primary" onClick={() => {}}>Login</ModalLogin>
                </div>
            </ModalWrapper>
        </Modal>
        </>
    )
}
export default Header