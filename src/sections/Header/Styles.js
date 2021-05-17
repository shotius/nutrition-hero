import styled from 'styled-components/macro'
import img from '../../shared/assests/Logo Black Full-1.svg'
import { mixins } from '../../shared/utils/styles';
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
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
`;