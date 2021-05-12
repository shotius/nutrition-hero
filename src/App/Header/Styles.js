import styled from 'styled-components'
import img from '../../shared/assests/Logo Black Full-1.svg'
import { mixins } from '../../shared/utils/styles';


export const Wrap = styled.div`
    height: 80px;
    display: flex;
    box-shadow: 0px 3px 6px #00000029;
`;

export const PageLogo = styled.img.attrs({
    src: img
})`
    margin-top: 28px;
    margin-left: 152px;
    height: 24px;
    width: 125px;
    ${mixins.clickable}
`;

export const  NavBar = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
    margin-right: 153px;
`;