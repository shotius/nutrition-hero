import React, { useState } from 'react'
import { Wrap, PageLogo, NavBar, Sticky, NavLink, IconWrap, SignUpBtn, LoginBtn, Modal, ModalWrapper, ModalText, ModalSignUp, ModalLogin} from './Styles'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { useActiveNav } from '../../shared/hooks/useActiveNav'

const Header = (refs) => {
    const [isModalShown, setIsModalShown] = useState(false)
    const {
        isExerciseActive,
        isNutritionActive,
        isExpertiesActive,
        isAppActive,
    } = useActiveNav(refs)

    // scroll to specific ref
    // scroll is not done with href, because I wanted -80px of y offset
    const handleScroll = (ref) => {
        setIsModalShown(false)
        const yOffeset = -80;
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffeset ;
        window.scrollTo({top: y})
    }

    return (
        <>
        <Sticky>
            <Wrap>
                <PageLogo />
                <NavBar >
                    <NavLink content="EXERCISESs" type="navLink" isActive={isExerciseActive} onClick={() => handleScroll(refs.exerciseRef)}>Exercises</NavLink>
                    <NavLink content="NUTRITIONn" type="navLink" isActive={isNutritionActive} onClick={() => handleScroll(refs.nutritionRef)}>nutrition</NavLink>
                    <NavLink content="EXPERTIESs" type="navLink" isActive={isExpertiesActive} onClick={() => handleScroll(refs.expertiesRef)}>expreties</NavLink>
                    <NavLink content="APPp" type="navLink" isActive={isAppActive} onClick={() => handleScroll(refs.appRef)}>app</NavLink>
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
                    <ModalText onClick={() => handleScroll(refs.exerciseRef)}>Exercise</ModalText>
                    <ModalText onClick={() => handleScroll(refs.nutritionRef)}>Nutrition</ModalText>
                    <ModalText onClick={() => handleScroll(refs.expertiesRef)}>Expertise</ModalText>
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