import styled, {css} from "styled-components/macro";
import Button from "../../shared/components/Button";
import { colors, devices, font, mixins } from "../../shared/utils/styles";
import { Wrapper } from "../../Styles";
import { PageLogo } from "../Header/Styles";

export const FooterWrapper = styled.div`
    margin-top: 10px;
    text-align: center;
`;

export const GetStartedWrap = styled.div`
    display: none;
    @media ${devices.laptop} {
        padding: 70px 0px;
        width: 100%;
        background-color: ${colors.darkBlue};
    }
    
    `;

export const GetStart = styled(Wrapper)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 110px;
    background-color: ${colors.white};
    border-radius: 10px;
    display: flex;
`;

export const FooterLine = styled.div`
    height: 10px;
    width: 100%;
    background-color: ${colors.semiGrey}
`;

export const FooterInfoWrap = styled(Wrapper)`
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    flex-wrap: wrap;
    padding-top: 20px;
    @media ${devices.tablet} {
        padding-top: 40px;
    }
`;

export const Text = styled.p`
    line-height: 24px;
    ${font.size(22)}
    ${font.medium};
`;

export const StyledButton = styled(Button)`
    flex: 1;
`;

export const Link = styled.a`
    display: block;
    color: ${colors.Grey};
    ${font.size(14)};
    ${font.regular};
    ${mixins.clickable};
`;

export const LinksWrap = styled.div`
    text-transform: capitalize;
    line-height: 25px;
    ${font.bold};
    ${font.size(14)};
    order: 1;
    flex-basis: 100%;
`;

export const Btn = styled.button`
    background: none;
    border: none;
    ${mixins.clickable}
`;

export const Links = styled.div`
    ${props => (!props.shown && css`display: none`)}
`;

export const MobileApps = styled.div`
    order: 3;
`;

export const GoogleStore = styled.img.attrs(props => ({
    src: props.src
}))`
    display: none;
    @media ${devices.tablet} {
        display: inline-block;
        ${mixins.clickable}
    }
`;

export const AppStore = styled.img.attrs(props => ({
    src: props.src
}))`
    padding-top: 60px;
    padding-bottom: 28px;
    ${mixins.clickable};
    margin: auto;
    @media ${devices.tablet} {
        margin-right: 16px;
    }
`;

export const LogoWrap = styled.div`
    flex-basis: 100%;
    order: 0;
    @media ${devices.tablet} {
        margin: 15px 0px;
    }
`;

export const Logo = styled(PageLogo)`
    margin-top: 0px;
    padding-bottom: 40px;
`;

export const Copyright = styled.small`
    padding-bottom:39px;
    color: ${colors.darkgrey};
    ${font.size(12)}
    ${font.regular};
`;

