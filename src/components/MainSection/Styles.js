import styled from "styled-components";

import img from  '../../shared/assests/Large Hero.png'
import { font } from "../../shared/utils/styles";
// const img = '/home/shoutius/sweeft_digital/workout/nutrition-react/src/shared/assests/Large Hero.png'

export const MainSectionWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 720px;
`;

export const PageHeading = styled.h1`
     width: 600px;
    height: 145px;
    font-size: 60px;
    letter-spacing: 0.02px;
    text-align: center;
    text-transform: capitalize;
    margin-top: 227px;
    margin-bottom: 0px;
    ${font.bold}
`;

export const ShortDescription = styled.p`
    width: 294px;
    height: 27px;
    margin-top: 10px;
    text-align: center;
    ${font.size(22)}
    ${font.normal}
`