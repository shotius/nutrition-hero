import styled from "styled-components";
import { devices } from "../../shared/utils/styles";
import { Wrapper } from '../../Styles'

export const FourthSectionWrap = styled(Wrapper)`
    display: none;
    @media ${devices.tablet} {
        display: flex;
        padding: 90px 0px;
        justify-content: space-between;
    }
`;

export const ImgWrapper = styled.div`
    flex: 0.9;
    height: 567px;
`;

export const AppStoreWrap = styled.div`
    margin-top: 70px;
`;