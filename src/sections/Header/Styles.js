import styled from 'styled-components/macro'
import img from '../../shared/assests/Logo Black Full-1.svg'
import { StyledButton } from '../../shared/components/Button/Styles';
import { devices, mixins } from '../../shared/utils/styles';
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
    /* background: red;  */
    /* @media (min) */
`;

export const PageLogo = styled.img.attrs({
    src: img
})`
    margin-top: 28px;
    height: 24px;
    width: 125px;
    ${mixins.clickable}
`;

export const  NavBar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 0.8;
`;

export const NavLink = styled(StyledButton)`
    display: none;
    @media ${devices.tablet} {
        padding: 0px 16px;
        display: block;
    } 
`;
export const SignUpBtn = styled(StyledButton)`
    display: none;
    @media ${devices.tablet} {
        display: flex;
    } 
`;

export const Menu = styled.img.attrs(props => ({
    src: props.src
}))`
        display: flex;
        width: 27px;
        height: 26px;
    @media ${devices.tablet} {
        display: none;
    }
`;