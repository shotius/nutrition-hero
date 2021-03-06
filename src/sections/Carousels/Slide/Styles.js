
import styled, { css } from "styled-components/macro";
import { StyledHeader } from "../../../shared/components/SectionHeader/Styles";
import { devices, font } from "../../../shared/utils/styles";

export const SlideWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex: 1;
    height: 100%;
    padding-bottom: 56px;
    ${props => (props.width 
        && css`
            flex-basis: ${props.width}%;
            width: ${props.width}%;
    `)};
    @media ${devices.tablet} {
        justify-content: space-between;
        padding-bottom: 0px;
        flex-wrap: nowrap;
    }
`;

export const ImgWrap = styled.div`
    flex-basis: 100%;
    height: 100vw;
    @media ${devices.tablet} {
        height: 100%;
        flex-basis: 50%;
        height: 500px;
        ${props => (props.order 
        && css`
            order: ${props.order}`)};
    }
    @media ${devices.laptop} {
        height: 720px;
    }
`;

const paddingTablet  = css`
    padding: 0px 30px;
`;
const paddingLaptop = css`
    padding: 0px 90px;
`;

export const Text = styled.div`
    padding: 16px;
    @media ${devices.tablet} {
        ${paddingTablet}
    }
    @media ${devices.laptop} {
        ${paddingLaptop}
    }
`;

export const Header = styled(StyledHeader)`
    ${font.size(30)};
    line-height: 34px;
    margin: 20px 0px;
    @media ${devices.tablet} {
        ${font.size(34)};
    }
    @media ${devices.laptop} {
        ${font.size(42)};
    }
`;

export const TextHeader = styled(StyledHeader)`
    margin: 10px 0px 20px;
    ${font.size(22)};
`;
