import styled from "styled-components/macro";
import Button from "../../shared/components/Button";
import { colors, devices, font, mixins } from "../../shared/utils/styles";
import { Wrapper } from "../../Styles";

export const FooterWrapper = styled.div`
    margin-top: 10px;
`;

export const GetStartedWrap = styled.div`
    display: none;
    @media ${devices.tablet} {
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
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 40px;
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
    /* flex-basis: ; */
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
`;

export const LogoWrap = styled.div`
    flex-basis: 100%;
    margin: 15px 0px;
`;

export const Copyright = styled.small`
    margin-bottom: 23px;
    color: ${colors.darkgrey};
    ${font.size(12)}
    ${font.regular};
`;