import React, { useState } from 'react'
import { FooterInfoWrap, FooterWrapper, GetStart, GetStartedWrap, Btn, Text, StyledButton,Links, Link, LinksWrap, LogoWrap, Copyright, FooterLine, GoogleStore, AppStore, MobileApps, Logo } from './Styles'
import appStorImg from '../../shared/assests/download-on-the-app-store-apple-1.svg'
import googlePlayImg from '../../shared/assests/google-play-badge-1.svg'
import arrowUp from '../../shared/assests/arrow_up.svg'
import arrowDown from '../../shared/assests/arrow_down.svg'

const Footer = () => {
    const [exploreShown, setExploreShown] = useState(false)
    const [companyShown, setCompanyShown] = useState(true)
    const [blogShown, setBlogShown] = useState(false)
    const [socialShown, setSocialShown] = useState(false)
    return (
        <FooterWrapper>
            <GetStartedWrap>
                <GetStart>
                    <Text>Join the thousands of people already using Nutriheros today!</Text>
                    <StyledButton type="primary" width="154px">Get start</StyledButton>
                </GetStart>
            </GetStartedWrap>
            <FooterLine />
            <FooterInfoWrap>
                <MobileApps>
                    <a href="#"><AppStore src={appStorImg}/></a>
                    <a href="#"><GoogleStore src={googlePlayImg} /></a>
                </MobileApps>
                <LinksWrap>
                    <Btn onClick={() => setExploreShown(!exploreShown)}>explore</Btn>
                    <img src={exploreShown ? arrowUp : arrowDown} />
                    <Links shown={exploreShown}>
                        <Links>Exercise</Links>
                        <Link>Nutritions</Link>
                        <Link>Expertise</Link>
                        <Link>tablet App</Link>
                    </Links>
                </LinksWrap>
                <LinksWrap>
                    <Btn onClick={() => setCompanyShown(!companyShown)}>company</Btn>
                    <img src={companyShown ? arrowUp : arrowDown} />
                    <Links shown={companyShown}>
                        <Link>Legal</Link>
                        <Link>Contact us</Link>
                        <Link>Press</Link>
                    </Links>
                </LinksWrap>
                <LinksWrap>
                    <Btn onClick={() => setBlogShown(!blogShown)}>blog</Btn>
                    <img src={blogShown ? arrowUp : arrowDown} />
                    <Links shown={blogShown}>
                        <Links>Latest Post One</Links>
                        <Link>Latest Post Two</Link>
                        <Link>Latest Post Three</Link>
                    </Links>
                </LinksWrap>
                <LinksWrap>
                    <Btn onClick={() => setSocialShown(!socialShown)}>Social</Btn>
                    <img src={socialShown ? arrowUp : arrowDown} />
                    <Links shown={socialShown}>
                        <Link>Facebook</Link>
                        <Link>Instagram</Link>
                        <Link>Twitter</Link>
                    </Links>
                </LinksWrap>
                <LogoWrap>
                    <Logo />
                </LogoWrap>
            </FooterInfoWrap>
                <Copyright>© Copyright Nutriheros 2020</Copyright>
        </FooterWrapper>
    )
}
export default Footer