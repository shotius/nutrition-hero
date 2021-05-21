
import styled, { css } from "styled-components/macro";
import { StyledHeader } from "../../../shared/components/SectionHeader/Styles";
import { devices, font } from "../../../shared/utils/styles";

export const SlideWrapper = styled.div`
    display: flex;
    /* align-items: center; */
    flex-wrap: wrap;
    flex-shrink: 0;
    flex: 1;
    height: 100%;
    /* padding: 0px 5px; */
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
    ${props => (props.order 
        && css`
            order: ${props.order}`)};
    @media ${devices.tablet} {
        height: 100%;
        flex-basis: 50%;
        height: 500px;
    }
    @media ${devices.laptop} {
        height: 720px;
    }
`;

export const Header = styled(StyledHeader)`
    ${font.size(30)};
    @media ${devices.tablet} {
        ${font.size(42)};
    }
`;

export const TextHeader = styled(StyledHeader)`
    margin: 24px 0px;
    ${font.size(22)};
`;