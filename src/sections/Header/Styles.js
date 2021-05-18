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
    @media ${devices.mobile} {
    }
`;

export const NavLink = styled(StyledButton)`
    padding: 0px 16px;
    @media ${devices.mobile} {
        display: none
    } 
`;
export const SignUpBtn = styled(StyledButton)`
     @media ${devices.mobile} {
        display: none
    } 
`;

export const Menu = styled.img.attrs(props => ({
    src: props.src
}))`
    display: none;
    width: 27px;
    height: 26px;
    @media ${devices.mobile} {
        display: block;
    }
`;