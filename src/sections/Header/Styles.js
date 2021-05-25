import styled, { css } from 'styled-components/macro'
import img from '../../shared/assests/Logo Black Full-1.svg'
import { StyledButton } from '../../shared/components/Button/Styles';
import { devices, mixins, colors, font } from '../../shared/utils/styles';
import { Wrapper } from '../../Styles';


export const Sticky = styled.div`
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    background: white;
    z-index: 1000;
`;
export const Wrap = styled(Wrapper)`
    display: relative;
    height: 80px;
    display: flex;
    background: white;
    justify-content: space-between;
    max-width: 500px;
    @media ${devices.tablet} { 
        max-width: 100%;
    }
`;

export const PageLogo = styled.img.attrs({
    src: img
})`
    margin-top: 28px;
    height: 24px;
    width: 125px;
    ${mixins.clickable}
    @media ${devices.laptop} {
        margin-left: 0px;
    }
`;

export const  NavBar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 0.8;
`;

const linkShowHide = css`
    display: none;
    @media ${devices.tablet} {
        display: flex;
    } 
`;

export const NavLink = styled(StyledButton)`
    ${linkShowHide}
    padding: 0px 16px;
    &:hover {
        ${font.black}
    }
    &:before {
        ${props => (props.content && css`content: '${props.content}'`)};
        height: 0px;
        ${font.black};
        visibility: hidden;
    }
`;

export const SignUpBtn = styled(StyledButton)`
    ${linkShowHide}
    width: 69px;
`;

export const LoginBtn = styled(StyledButton)`
    text-transform: capitalize;
    padding-left: 16px;
    color: ${colors.darkPurple};
    ${linkShowHide}
`;

export const IconWrap = styled.button`
        background: none;
        border: none;
        width: 27px;
        height: 26px;
        font-size: 22px;
        line-height: 26px;
        ${font.compact};
    @media ${devices.tablet} {
        display: none;
    }
`;

export const Modal = styled.div`
    position: fixed;
    height: 100vh;
    width: 0;
    top: 0;
    right: 0;
    background: ${colors.darkBlue};
    z-index: 1000;
    transition: all 0.7s;
    ${props => (props.shown 
        && css`
            width: 100vw;`)};
      @media ${devices.tablet} {
        display: none;
    }  
`;

export const ModalWrapper = styled.div`
    padding: 30px 50px;
    color: white;
    height: 90%;
    display: flex;  
    flex-direction: column;
    justify-content: space-between;
`;


export const ModalText = styled.button`
    color: white;
    display: block;
    background-color: inherit;
    border: none;
    padding: 20px 0px;
    ${font.bold};
    ${font.size(50)}
`;


export const ModalSignUp = styled(StyledButton)`
    width: 100%;
    height: 50px;
`;

export const ModalLogin = styled(StyledButton)`
    width: 100%;
    height: 50px;
    background-color: inherit;
    border-color: ${colors.darkBlue}
`;