import React from 'react'
import { FooterInfoWrap, FooterWrapper, GetStart, GetStartedWrap, Text, StyledButton, Link, LinksWrap } from './Styles'
import appStorImg from '../../shared/assests/download-on-the-app-store-apple-1.svg'
import googlePlayImg from '../../shared/assests/google-play-badge-1.svg'
import logo from '../../shared/assests/Logo Black Full-1.svg'

const Footer = () => {
    return (
        <FooterWrapper>
            <GetStartedWrap>
                <GetStart>
                    <Text>Join the thousands of people already using Nutriheros today!</Text>
                    <StyledButton type="primary" width="154px">Get start</StyledButton>
                </GetStart>
            </GetStartedWrap>
            <FooterInfoWrap>
                <div>
                    <a href="#" style={{pointer: "cursor"}}><img src={appStorImg} style={{marginRight: 16}}/></a>
                    <a href="#" style={{pointer: "cursor"}}><img src={googlePlayImg} /></a>
                </div>
                <LinksWrap>
                    explore
                    <Link>Exercise</Link>
                    <Link>Nutritions</Link>
                    <Link>Expertise</Link>
                    <Link>Mobile App</Link>
                </LinksWrap>
                <LinksWrap>
                    company
                    <Link>Legal</Link>
                    <Link>Contact us</Link>
                    <Link>Press</Link>
                </LinksWrap>
                <LinksWrap>
                    blog
                    <Link>Latest Post One</Link>
                    <Link>Latest Post Two</Link>
                    <Link>Latest Post Three</Link>
                </LinksWrap>
                <LinksWrap>
                    Social
                    <Link>Facebook</Link>
                    <Link>Instagram</Link>
                    <Link>Twitter</Link>
                </LinksWrap>
            </FooterInfoWrap>
            <img src={logo}/>
        </FooterWrapper>
    )
}
export default Footer