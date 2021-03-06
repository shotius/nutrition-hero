import styled, {css} from "styled-components/macro";
import Button from "../../shared/components/Button";
import { colors, devices, font, mixins } from "../../shared/utils/styles";
import { Wrapper } from "../../Styles";
import { PageLogo } from "../Header/Styles";

export const FooterWrapper = styled.div`
    margin-top: 10px;
    text-align: center;
    padding-bottom: 100px;
    @media ${devices.tablet} {
        padding-bottom: 10px;
    }
`;

export const GetStartedWrap = styled.div`
    display: none;
    @media ${devices.laptop} {
        display: block;
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
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    flex-wrap: wrap;
    padding-top: 20px;
    @media ${devices.tablet} {
        padding-top: 40px;
        justify-content: space-between;
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
    @media ${devices.tablet} {
        order: 0;
        flex-basis: 10%;
    }
`;

export const Btn = styled.button`
    background: none;
    border: none;
    ${mixins.clickable}
`;

export const UpDownArrow = styled.img.attrs(props => ({
    src: props.src
}))`
    @media ${devices.tablet} {
        display: none;
    }

`;

export const Links = styled.div`
    ${props => (props.shown === true ? css`display: block` : css`display: none`)};
    @media ${devices.tablet} {
        display: block;
    }

`;

export const MobileApps = styled.div`
    order: 3;
    @media ${devices.tablet} {
        order: 0;
    }
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
    padding: 60px 0px 28px;
    ${mixins.clickable};
    margin: auto;
    @media ${devices.tablet} {
        padding: 0px 16px 0px;
    }
`;

export const LogoWrap = styled.div`
    flex-basis: 100%;
    order: 0;
    @media ${devices.tablet} {
        margin: 15px 0px;
        text-align: start;
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

