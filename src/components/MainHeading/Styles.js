import styled from "styled-components";

import img from  '../../shared/assests/Large Hero.png'
import { font } from "../../shared/utils/styles";
// const img = '/home/shoutius/sweeft_digital/workout/nutrition-react/src/shared/assests/Large Hero.png'

export const MainHeadingWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 720px;
    width: 100%;
    background-image: url(${'../shared/assests/Large Hero.png'});
`;

export const ImgBackground = styled.img.attrs({
    src: img
})`
    width: 100%;
    z-index: -9;
    position: absolute;
`;

export const PageHeading = styled.h1`
     width: 600px;
    height: 145px;
    font-size: 60px;
    letter-spacing: 0.02px;
    text-align: center;
    text-transform: capitalize;
    margin-top: 227px;
    ${font.bold}
`;